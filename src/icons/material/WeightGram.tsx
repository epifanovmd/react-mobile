import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeightGramIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.95 10.56C19.75 9.67 18.95 9 18 9H15.46C15.81 8.41 16 7.73 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7C8 7.73 8.19 8.41 8.54 9H6C5.05 9 4.25 9.67 4.05 10.56C2.04 18.57 2 18.78 2 19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H20C20.5304 21 21.0391 20.7893 21.4142 20.4142C21.7893 20.0391 22 19.5304 22 19C22 18.78 21.96 18.57 19.95 10.56ZM12 5C12.5304 5 13.0391 5.21071 13.4142 5.58579C13.7893 5.96086 14 6.46957 14 7C14 7.53043 13.7893 8.03914 13.4142 8.41421C13.0391 8.78929 12.5304 9 12 9C11.4696 9 10.9609 8.78929 10.5858 8.41421C10.2107 8.03914 10 7.53043 10 7C10 6.46957 10.2107 5.96086 10.5858 5.58579C10.9609 5.21071 11.4696 5 12 5ZM15 13H11V17H13V14H15V19H11C9.89 19 9 18.11 9 17V13C9 11.89 9.89 11 11 11H15V13Z" />
    </Svg>
  );
};
