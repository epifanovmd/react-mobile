import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SkullOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8 15C7.46957 15 6.96086 14.7893 6.58579 14.4142C6.21071 14.0391 6 13.5304 6 13C6 12.4696 6.21071 11.9609 6.58579 11.5858C6.96086 11.2107 7.46957 11 8 11C8.53043 11 9.03914 11.2107 9.41421 11.5858C9.78929 11.9609 10 12.4696 10 13C10 13.5304 9.78929 14.0391 9.41421 14.4142C9.03914 14.7893 8.53043 15 8 15ZM10.5 17L12 14L13.5 17H10.5ZM16 15C15.4696 15 14.9609 14.7893 14.5858 14.4142C14.2107 14.0391 14 13.5304 14 13C14 12.4696 14.2107 11.9609 14.5858 11.5858C14.9609 11.2107 15.4696 11 16 11C16.5304 11 17.0391 11.2107 17.4142 11.5858C17.7893 11.9609 18 12.4696 18 13C18 13.5304 17.7893 14.0391 17.4142 14.4142C17.0391 14.7893 16.5304 15 16 15ZM22 11C22 8.34784 20.9464 5.8043 19.0711 3.92893C17.1957 2.05357 14.6522 1 12 1C10.6868 1 9.38642 1.25866 8.17317 1.7612C6.95991 2.26375 5.85752 3.00035 4.92893 3.92893C3.05357 5.8043 2 8.34784 2 11C2 13.8 3.2 16.3 5 18.1V22H19V18.1C20.8 16.3 22 13.8 22 11ZM17 20H15V18H13V20H11V18H9V20H7V17.2C5.2 15.7 4 13.5 4 11C4 8.87827 4.84285 6.84344 6.34315 5.34315C7.84344 3.84285 9.87827 3 12 3C14.1217 3 16.1566 3.84285 17.6569 5.34315C19.1571 6.84344 20 8.87827 20 11C20 13.5 18.8 15.8 17 17.2V20Z" />
    </Svg>
  );
};
