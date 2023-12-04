import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountSupervisorCircleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15.6 8.34C16.67 8.34 17.53 9.2 17.53 10.27C17.53 11.34 16.67 12.2 15.6 12.2C15.0881 12.2 14.5972 11.9967 14.2353 11.6347C13.8733 11.2728 13.67 10.7819 13.67 10.27C13.66 9.2 14.53 8.34 15.6 8.34ZM9.6 6.76C10.9 6.76 11.96 7.82 11.96 9.12C11.96 10.42 10.9 11.5 9.6 11.5C8.3 11.5 7.24 10.42 7.24 9.12C7.24 7.81 8.29 6.76 9.6 6.76ZM9.6 15.89V19.64C7.2 18.89 5.3 17.04 4.46 14.68C5.5 13.56 8.13 13 9.6 13C10.13 13 10.8 13.07 11.5 13.21C9.86 14.08 9.6 15.23 9.6 15.89ZM12 20C11.72 20 11.46 20 11.2 19.96V15.89C11.2 14.47 14.14 13.76 15.6 13.76C16.67 13.76 18.5 14.15 19.44 14.91C18.27 17.88 15.38 20 12 20Z" />
    </Svg>
  );
};
