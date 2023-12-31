import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SpeakerMultipleIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 10C13.2044 10 12.4413 10.3161 11.8787 10.8787C11.3161 11.4413 11 12.2044 11 13C11 13.7956 11.3161 14.5587 11.8787 15.1213C12.4413 15.6839 13.2044 16 14 16C14.7956 16 15.5587 15.6839 16.1213 15.1213C16.6839 14.5587 17 13.7956 17 13C17 12.2044 16.6839 11.4413 16.1213 10.8787C15.5587 10.3161 14.7956 10 14 10ZM14 18C12.6739 18 11.4021 17.4732 10.4645 16.5355C9.52678 15.5979 9 14.3261 9 13C9 11.6739 9.52678 10.4021 10.4645 9.46447C11.4021 8.52678 12.6739 8 14 8C15.3261 8 16.5979 8.52678 17.5355 9.46447C18.4732 10.4021 19 11.6739 19 13C19 14.3261 18.4732 15.5979 17.5355 16.5355C16.5979 17.4732 15.3261 18 14 18ZM14 2C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4C16 4.53043 15.7893 5.03914 15.4142 5.41421C15.0391 5.78929 14.5304 6 14 6C13.4696 6 12.9609 5.78929 12.5858 5.41421C12.2107 5.03914 12 4.53043 12 4C12 3.46957 12.2107 2.96086 12.5858 2.58579C12.9609 2.21071 13.4696 2 14 2ZM19 0H9C8.46957 0 7.96086 0.210714 7.58579 0.585786C7.21071 0.960859 7 1.46957 7 2V18C7 18.5304 7.21071 19.0391 7.58579 19.4142C7.96086 19.7893 8.46957 20 9 20H19C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18V2C21 1.46957 20.7893 0.960859 20.4142 0.585786C20.0391 0.210714 19.5304 0 19 0V0ZM5 22H17V24H5C4.46957 24 3.96086 23.7893 3.58579 23.4142C3.21071 23.0391 3 22.5304 3 22V4H5" />
    </Svg>
  );
};
