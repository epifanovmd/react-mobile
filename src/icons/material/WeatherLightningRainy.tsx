import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherLightningRainyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4.5 13.59C5 13.87 5.14 14.5 4.87 14.96C4.59 15.44 4 15.6 3.5 15.33C2 14.47 1 12.85 1 11C1 9.67392 1.52678 8.40215 2.46447 7.46447C3.40215 6.52678 4.67392 6 6 6C7 3.65 9.3 2 12 2C15.43 2 18.24 4.66 18.5 8.03L19 8C20.0609 8 21.0783 8.42143 21.8284 9.17157C22.5786 9.92172 23 10.9391 23 12C23 13.0609 22.5786 14.0783 21.8284 14.8284C21.0783 15.5786 20.0609 16 19 16C18.7348 16 18.4804 15.8946 18.2929 15.7071C18.1054 15.5196 18 15.2652 18 15C18 14.7348 18.1054 14.4804 18.2929 14.2929C18.4804 14.1054 18.7348 14 19 14C19.5304 14 20.0391 13.7893 20.4142 13.4142C20.7893 13.0391 21 12.5304 21 12C21 11.4696 20.7893 10.9609 20.4142 10.5858C20.0391 10.2107 19.5304 10 19 10H17V9C17 7.67392 16.4732 6.40215 15.5355 5.46447C14.5979 4.52678 13.3261 4 12 4C9.5 4 7.45 5.82 7.06 8.19C6.73 8.07 6.37 8 6 8C5.20435 8 4.44129 8.31607 3.87868 8.87868C3.31607 9.44129 3 10.2044 3 11C3 12.11 3.6 13.08 4.5 13.6V13.59ZM9.5 11H12.5L10.5 15H12.5L8.75 22L9.5 17H7L9.5 11ZM17.5 18.67C17.5 19.96 16.5 21 15.25 21C14 21 13 19.96 13 18.67C13 17.12 15.25 14.5 15.25 14.5C15.25 14.5 17.5 17.12 17.5 18.67Z" />
    </Svg>
  );
};
