import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherCloudyArrowRightIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 7L6.69 7.06C7.32 4.72 9.46 3 12 3C13.4587 3 14.8576 3.57946 15.8891 4.61091C16.9205 5.64236 17.5 7.04131 17.5 8.5L17.42 9.45C17.88 9.16 18.42 9 19 9C19.7956 9 20.5587 9.31607 21.1213 9.87868C21.6839 10.4413 22 11.2044 22 12C22 12.7956 21.6839 13.5587 21.1213 14.1213C20.5587 14.6839 19.7956 15 19 15H6C4.93913 15 3.92172 14.5786 3.17157 13.8284C2.42143 13.0783 2 12.0609 2 11C2 9.93913 2.42143 8.92172 3.17157 8.17157C3.92172 7.42143 4.93913 7 6 7ZM6 9C5.46957 9 4.96086 9.21071 4.58579 9.58579C4.21071 9.96086 4 10.4696 4 11C4 11.5304 4.21071 12.0391 4.58579 12.4142C4.96086 12.7893 5.46957 13 6 13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11H15.5V8.5C15.5 7.57174 15.1313 6.6815 14.4749 6.02513C13.8185 5.36875 12.9283 5 12 5C11.0717 5 10.1815 5.36875 9.52513 6.02513C8.86875 6.6815 8.5 7.57174 8.5 8.5V9H6ZM22 19L19 22V20H2V18H19V16L22 19Z" />
    </Svg>
  );
};
