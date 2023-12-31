import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BabyFaceOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.5 9.25C14.8315 9.25 15.1495 9.3817 15.3839 9.61612C15.6183 9.85054 15.75 10.1685 15.75 10.5C15.75 10.8315 15.6183 11.1495 15.3839 11.3839C15.1495 11.6183 14.8315 11.75 14.5 11.75C14.1685 11.75 13.8505 11.6183 13.6161 11.3839C13.3817 11.1495 13.25 10.8315 13.25 10.5C13.25 10.1685 13.3817 9.85054 13.6161 9.61612C13.8505 9.3817 14.1685 9.25 14.5 9.25ZM9.5 9.25C9.83152 9.25 10.1495 9.3817 10.3839 9.61612C10.6183 9.85054 10.75 10.1685 10.75 10.5C10.75 10.8315 10.6183 11.1495 10.3839 11.3839C10.1495 11.6183 9.83152 11.75 9.5 11.75C9.16848 11.75 8.85054 11.6183 8.61612 11.3839C8.3817 11.1495 8.25 10.8315 8.25 10.5C8.25 10.1685 8.3817 9.85054 8.61612 9.61612C8.85054 9.3817 9.16848 9.25 9.5 9.25ZM7.5 14H16.5C15.74 15.77 14 17 12 17C10 17 8.26 15.77 7.5 14ZM1 12C1 10.19 2.2 8.66 3.86 8.17C5.29 5.11 8.4 3 12 3C15.6 3 18.71 5.11 20.15 8.17C21.8 8.66 23 10.19 23 12C23 13.81 21.8 15.34 20.15 15.83C18.71 18.89 15.6 21 12 21C8.4 21 5.29 18.89 3.86 15.83C2.2 15.34 1 13.81 1 12ZM12 5C8.82 5 6.14 7.12 5.28 10H5C4.46957 10 3.96086 10.2107 3.58579 10.5858C3.21071 10.9609 3 11.4696 3 12C3 12.5304 3.21071 13.0391 3.58579 13.4142C3.96086 13.7893 4.46957 14 5 14H5.28C6.14 16.88 8.82 19 12 19C15.18 19 17.86 16.88 18.72 14H19C19.5304 14 20.0391 13.7893 20.4142 13.4142C20.7893 13.0391 21 12.5304 21 12C21 11.4696 20.7893 10.9609 20.4142 10.5858C20.0391 10.2107 19.5304 10 19 10H18.72C17.86 7.12 15.18 5 12 5Z" />
    </Svg>
  );
};
