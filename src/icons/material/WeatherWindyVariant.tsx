import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherWindyVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 6L6.69 6.06C7.32 3.72 9.46 2 12 2C13.4587 2 14.8576 2.57946 15.8891 3.61091C16.9205 4.64236 17.5 6.04131 17.5 7.5L17.42 8.45C17.88 8.16 18.42 8 19 8C19.7956 8 20.5587 8.31607 21.1213 8.87868C21.6839 9.44129 22 10.2044 22 11C22 11.7956 21.6839 12.5587 21.1213 13.1213C20.5587 13.6839 19.7956 14 19 14H6C4.93913 14 3.92172 13.5786 3.17157 12.8284C2.42143 12.0783 2 11.0609 2 10C2 8.93913 2.42143 7.92172 3.17157 7.17157C3.92172 6.42143 4.93913 6 6 6ZM6 8C5.46957 8 4.96086 8.21071 4.58579 8.58579C4.21071 8.96086 4 9.46957 4 10C4 10.5304 4.21071 11.0391 4.58579 11.4142C4.96086 11.7893 5.46957 12 6 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10H15.5V7.5C15.5 6.57174 15.1313 5.6815 14.4749 5.02513C13.8185 4.36875 12.9283 4 12 4C11.0717 4 10.1815 4.36875 9.52513 5.02513C8.86875 5.6815 8.5 6.57174 8.5 7.5V8H6ZM18 18H4C3.73478 18 3.48043 17.8946 3.29289 17.7071C3.10536 17.5196 3 17.2652 3 17C3 16.7348 3.10536 16.4804 3.29289 16.2929C3.48043 16.1054 3.73478 16 4 16H18C18.7956 16 19.5587 16.3161 20.1213 16.8787C20.6839 17.4413 21 18.2044 21 19C21 19.7956 20.6839 20.5587 20.1213 21.1213C19.5587 21.6839 18.7956 22 18 22C17.17 22 16.42 21.66 15.88 21.12C15.5 20.73 15.5 20.1 15.88 19.71C16.27 19.32 16.9 19.32 17.29 19.71C17.47 19.89 17.72 20 18 20C18.2652 20 18.5196 19.8946 18.7071 19.7071C18.8946 19.5196 19 19.2652 19 19C19 18.7348 18.8946 18.4804 18.7071 18.2929C18.5196 18.1054 18.2652 18 18 18Z" />
    </Svg>
  );
};
