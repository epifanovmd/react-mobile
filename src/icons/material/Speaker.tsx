import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SpeakerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 12C11.2044 12 10.4413 12.3161 9.87868 12.8787C9.31607 13.4413 9 14.2044 9 15C9 15.7956 9.31607 16.5587 9.87868 17.1213C10.4413 17.6839 11.2044 18 12 18C12.7956 18 13.5587 17.6839 14.1213 17.1213C14.6839 16.5587 15 15.7956 15 15C15 14.2044 14.6839 13.4413 14.1213 12.8787C13.5587 12.3161 12.7956 12 12 12ZM12 20C10.6739 20 9.40215 19.4732 8.46447 18.5355C7.52678 17.5979 7 16.3261 7 15C7 13.6739 7.52678 12.4021 8.46447 11.4645C9.40215 10.5268 10.6739 10 12 10C13.3261 10 14.5979 10.5268 15.5355 11.4645C16.4732 12.4021 17 13.6739 17 15C17 16.3261 16.4732 17.5979 15.5355 18.5355C14.5979 19.4732 13.3261 20 12 20ZM12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8C10.89 8 10 7.1 10 6C10 4.89 10.89 4 12 4ZM17 2H7C5.89 2 5 2.89 5 4V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V4C19 2.89 18.1 2 17 2Z" />
    </Svg>
  );
};
