import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChartTimelineVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 14L3.5 14.07L8.07 9.5C7.89 8.85 8.06 8.11 8.59 7.59C9.37 6.8 10.63 6.8 11.41 7.59C11.94 8.11 12.11 8.85 11.93 9.5L14.5 12.07L15 12C15.18 12 15.35 12 15.5 12.07L19.07 8.5C19 8.35 19 8.18 19 8C19 7.46957 19.2107 6.96086 19.5858 6.58579C19.9609 6.21071 20.4696 6 21 6C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8C23 8.53043 22.7893 9.03914 22.4142 9.41421C22.0391 9.78929 21.5304 10 21 10C20.82 10 20.65 10 20.5 9.93L16.93 13.5C17 13.65 17 13.82 17 14C17 14.5304 16.7893 15.0391 16.4142 15.4142C16.0391 15.7893 15.5304 16 15 16C14.4696 16 13.9609 15.7893 13.5858 15.4142C13.2107 15.0391 13 14.5304 13 14L13.07 13.5L10.5 10.93C10.18 11 9.82 11 9.5 10.93L4.93 15.5L5 16C5 16.5304 4.78929 17.0391 4.41421 17.4142C4.03914 17.7893 3.53043 18 3 18C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16C1 15.4696 1.21071 14.9609 1.58579 14.5858C1.96086 14.2107 2.46957 14 3 14Z" />
    </Svg>
  );
};
