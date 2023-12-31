import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HeadSyncOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.9999 3C16.8799 3 19.9999 6.14 19.9999 10C19.9999 12.8 18.3699 15.19 15.9999 16.31V21H8.99992V18H7.99992C6.88992 18 5.99992 17.11 5.99992 16V13H4.49992C4.07992 13 3.83992 12.5 4.07992 12.19L5.99992 9.66C6.18992 5.95 9.22992 3 12.9999 3ZM12.9999 1C8.40992 1 4.60992 4.42 4.05992 8.9L2.49992 11H2.46992L2.44992 11.03C1.89992 11.79 1.82992 12.79 2.25992 13.62C2.61992 14.31 3.25992 14.79 3.99992 14.94V16C3.99992 17.85 5.27992 19.42 6.99992 19.87V23H17.9999V17.5C20.4999 15.83 21.9999 13.06 21.9999 10C21.9999 5.03 17.9599 1 12.9999 1ZM13.9999 15V13.5C11.7899 13.5 9.99992 11.71 9.99992 9.5C9.99992 8.68 10.2499 7.92 10.6699 7.29L11.7599 8.38C11.5899 8.72 11.4999 9.1 11.4999 9.5C11.4999 10.88 12.6199 12 13.9999 12V10.5L16.2499 12.75L13.9999 15ZM17.3299 11.71L16.2399 10.62C16.4099 10.28 16.4999 9.9 16.4999 9.5C16.4999 8.12 15.3799 7 13.9999 7V8.5L11.7499 6.25L13.9999 4V5.5C16.2099 5.5 17.9999 7.29 17.9999 9.5C17.9999 10.32 17.7499 11.08 17.3299 11.71Z" />
    </Svg>
  );
};
