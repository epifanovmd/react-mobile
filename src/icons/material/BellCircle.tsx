import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BellCircleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2ZM17 16V15L16 14V11.39C16 10.3 15.73 9.34 15.21 8.53C14.7 7.72 13.96 7.21 13 7V6.5C13 6.23478 12.8946 5.98043 12.7071 5.79289C12.5196 5.60536 12.2652 5.5 12 5.5C11.7348 5.5 11.4804 5.60536 11.2929 5.79289C11.1054 5.98043 11 6.23478 11 6.5V7C10.04 7.21 9.3 7.72 8.79 8.53C8.27 9.34 8 10.3 8 11.39V14L7 15V16H17ZM13.5 17H10.5C10.5 17.3978 10.658 17.7794 10.9393 18.0607C11.2206 18.342 11.6022 18.5 12 18.5C12.3978 18.5 12.7794 18.342 13.0607 18.0607C13.342 17.7794 13.5 17.3978 13.5 17Z" />
    </Svg>
  );
};
