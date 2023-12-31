import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RestartAlertIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.99992 4.02981V0.632812L4.99992 5.62981L9.99992 10.6298V6.02981C11.4999 6.02981 13.1099 6.62981 14.2099 7.72981C16.4999 10.1298 16.4999 13.9298 14.2099 16.2298C12.9099 17.5298 11.1099 18.1298 9.39992 17.9298L8.89992 19.9298C11.3099 20.2298 13.8099 19.5298 15.6099 17.6298C18.6999 14.5298 18.6999 9.42981 15.6099 6.32981C14.1099 4.82981 12.1099 4.02981 9.99992 4.02981ZM4.30992 17.6298C5.10992 18.4298 5.99992 19.0298 6.99992 19.4298L7.60992 17.4298C6.90992 17.1298 6.30992 16.7298 5.80992 16.2298C3.90992 14.4298 3.49992 11.6298 4.60992 9.42981L3.10992 7.92981C1.30992 11.0298 1.70992 15.0298 4.30992 17.6298ZM19.9999 12.9998H21.9999V6.99981H19.9999V12.9998ZM19.9999 16.9998H21.9999V14.9998H19.9999V16.9998Z" />
    </Svg>
  );
};
