import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BatteryHeartIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.67 4H11V2H5V4H3.33C2.97807 4.00262 2.6413 4.14358 2.39244 4.39244C2.14358 4.6413 2.00262 4.97807 2 5.33V20.67C2.00262 21.0219 2.14358 21.3587 2.39244 21.6076C2.6413 21.8564 2.97807 21.9974 3.33 22H12.67C13.0219 21.9974 13.3587 21.8564 13.6076 21.6076C13.8564 21.3587 13.9974 21.0219 14 20.67V5.33C13.9974 4.97807 13.8564 4.6413 13.6076 4.39244C13.3587 4.14358 13.0219 4.00262 12.67 4ZM19 16.17L18.42 15.64C16.36 13.77 15 12.54 15 11C14.9973 10.7103 15.0524 10.4231 15.162 10.1549C15.2716 9.88683 15.4336 9.64324 15.6384 9.43841C15.8432 9.23359 16.0868 9.07164 16.3549 8.96203C16.6231 8.85241 16.9103 8.79733 17.2 8.8C17.5418 8.80218 17.8793 8.87735 18.1897 9.02049C18.5001 9.16364 18.7764 9.37144 19 9.63C19.2236 9.37144 19.4999 9.16364 19.8103 9.02049C20.1207 8.87735 20.4582 8.80218 20.8 8.8C21.0897 8.79733 21.3769 8.85241 21.6451 8.96203C21.9132 9.07164 22.1568 9.23359 22.3616 9.43841C22.5664 9.64324 22.7284 9.88683 22.838 10.1549C22.9476 10.4231 23.0027 10.7103 23 11C23 12.5 21.64 13.74 19.58 15.61L19 16.17Z" />
    </Svg>
  );
};
