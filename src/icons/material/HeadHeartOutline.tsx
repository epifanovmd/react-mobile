import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadHeartOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.9999 3C16.8799 3 19.9999 6.14 19.9999 10C19.9999 12.8 18.3699 15.19 15.9999 16.31V21H8.99992V18H7.99992C6.88992 18 5.99992 17.11 5.99992 16V13H4.49992C4.07992 13 3.83992 12.5 4.07992 12.19L5.99992 9.66C6.18992 5.95 9.22992 3 12.9999 3ZM12.9999 1C8.40992 1 4.60992 4.42 4.05992 8.9L2.49992 11H2.46992L2.44992 11.03C1.89992 11.79 1.82992 12.79 2.25992 13.62C2.61992 14.31 3.25992 14.79 3.99992 14.94V16C3.99992 17.85 5.27992 19.42 6.99992 19.87V23H17.9999V17.5C20.4999 15.83 21.9999 13.06 21.9999 10C21.9999 5.03 17.9599 1 12.9999 1ZM16.9999 8.83C16.9999 10.37 15.6399 11.6 13.5799 13.47L12.9999 14L12.4199 13.47C10.3599 11.6 8.99992 10.37 8.99992 8.83C8.99992 7.63 9.95992 6.64 11.1599 6.63H11.1999C11.8899 6.63 12.5499 6.94 12.9999 7.46C13.4499 6.94 14.1099 6.63 14.7999 6.63C15.9999 6.62 16.9999 7.59 16.9999 8.79V8.83Z" />
    </Svg>
  );
};
