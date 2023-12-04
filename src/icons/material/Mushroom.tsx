import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MushroomIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12C22 12.5304 21.7893 13.0391 21.4142 13.4142C21.0391 13.7893 20.5304 14 20 14H4C3.46957 14 2.96086 13.7893 2.58579 13.4142C2.21071 13.0391 2 12.5304 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2ZM12 8C12.5304 8 13.0391 7.78929 13.4142 7.41421C13.7893 7.03914 14 6.53043 14 6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4C11.4696 4 10.9609 4.21071 10.5858 4.58579C10.2107 4.96086 10 5.46957 10 6C10 6.53043 10.2107 7.03914 10.5858 7.41421C10.9609 7.78929 11.4696 8 12 8ZM17 12C17.5304 12 18.0391 11.7893 18.4142 11.4142C18.7893 11.0391 19 10.5304 19 10C19 9.46957 18.7893 8.96086 18.4142 8.58579C18.0391 8.21071 17.5304 8 17 8C16.4696 8 15.9609 8.21071 15.5858 8.58579C15.2107 8.96086 15 9.46957 15 10C15 10.5304 15.2107 11.0391 15.5858 11.4142C15.9609 11.7893 16.4696 12 17 12ZM7 12C7.53043 12 8.03914 11.7893 8.41421 11.4142C8.78929 11.0391 9 10.5304 9 10C9 9.46957 8.78929 8.96086 8.41421 8.58579C8.03914 8.21071 7.53043 8 7 8C6.46957 8 5.96086 8.21071 5.58579 8.58579C5.21071 8.96086 5 9.46957 5 10C5 10.5304 5.21071 11.0391 5.58579 11.4142C5.96086 11.7893 6.46957 12 7 12ZM15 15L16.27 19.45L16.35 20C16.35 21.1 15.45 22 14.35 22H9.65C9.11957 22 8.61086 21.7893 8.23579 21.4142C7.86071 21.0391 7.65 20.5304 7.65 20L7.73 19.45L9 15H15Z" />
    </Svg>
  );
};
