import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmoticonTongueIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM7.27 11C7.1 10.71 7 10.36 7 10C7 8.89 7.89 8 9 8C9.53043 8 10.0391 8.21071 10.4142 8.58579C10.7893 8.96086 11 9.46957 11 10C11 10.36 10.9 10.71 10.73 11C10.39 10.4 9.74 10 9 10C8.26 10 7.61 10.4 7.27 11ZM16 15H15C15 17 14.1 18 13 18C11.9 18 11 17 11 15H8V13H16V15ZM16.73 11C16.39 10.4 15.74 10 15 10C14.26 10 13.61 10.4 13.27 11C13.1 10.71 13 10.36 13 10C13 8.89 13.89 8 15 8C15.5304 8 16.0391 8.21071 16.4142 8.58579C16.7893 8.96086 17 9.46957 17 10C17 10.36 16.9 10.71 16.73 11Z" />
    </Svg>
  );
};
