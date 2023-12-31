import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BatteryHeartVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.67 4H15V2H9V4H7.33C6.97807 4.00262 6.6413 4.14358 6.39244 4.39244C6.14358 4.6413 6.00262 4.97807 6 5.33V20.67C6.00262 21.0219 6.14358 21.3587 6.39244 21.6076C6.6413 21.8564 6.97807 21.9974 7.33 22H16.67C17.0219 21.9974 17.3587 21.8564 17.6076 21.6076C17.8564 21.3587 17.9974 21.0219 18 20.67V5.33C17.9974 4.97807 17.8564 4.6413 17.6076 4.39244C17.3587 4.14358 17.0219 4.00262 16.67 4ZM12.58 15.64L12 16.17L11.42 15.64C9.36 13.77 8 12.54 8 11C7.99733 10.7103 8.05241 10.4231 8.16203 10.1549C8.27164 9.88683 8.43359 9.64324 8.63841 9.43841C8.84324 9.23359 9.08683 9.07164 9.35495 8.96203C9.62307 8.85241 9.91035 8.79733 10.2 8.8C10.5418 8.80218 10.8793 8.87735 11.1897 9.02049C11.5001 9.16364 11.7764 9.37144 12 9.63C12.2236 9.37144 12.4999 9.16364 12.8103 9.02049C13.1207 8.87735 13.4582 8.80218 13.8 8.8C14.0897 8.79733 14.3769 8.85241 14.6451 8.96203C14.9132 9.07164 15.1568 9.23359 15.3616 9.43841C15.5664 9.64324 15.7284 9.88683 15.838 10.1549C15.9476 10.4231 16.0027 10.7103 16 11C16 12.54 14.64 13.77 12.58 15.64Z" />
    </Svg>
  );
};
