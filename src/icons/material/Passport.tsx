import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PassportIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 2C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V4C20 3.46957 19.7893 2.96086 19.4142 2.58579C19.0391 2.21071 18.5304 2 18 2H6ZM12 5C13.3261 5 14.5979 5.52678 15.5355 6.46447C16.4732 7.40215 17 8.67392 17 10C17 11.3261 16.4732 12.5979 15.5355 13.5355C14.5979 14.4732 13.3261 15 12 15C10.6739 15 9.40215 14.4732 8.46447 13.5355C7.52678 12.5979 7 11.3261 7 10C7 8.67392 7.52678 7.40215 8.46447 6.46447C9.40215 5.52678 10.6739 5 12 5ZM12 6C11.59 6.62 11.25 7.29 11.04 8H12.96C12.75 7.29 12.42 6.62 12 6ZM10.7 6.22C9.78 6.53 9 7.17 8.54 8H10C10.18 7.38 10.4 6.78 10.7 6.22ZM13.29 6.22C13.59 6.78 13.82 7.38 14 8H15.46C15 7.17 14.21 6.54 13.29 6.22ZM8.13 9C8.05 9.32 8 9.65 8 10C8 10.35 8.05 10.68 8.13 11H9.82C9.78 10.67 9.75 10.34 9.75 10C9.75 9.66 9.78 9.33 9.82 9H8.13ZM10.83 9C10.78 9.32 10.75 9.66 10.75 10C10.75 10.34 10.78 10.67 10.83 11H13.17C13.21 10.67 13.25 10.34 13.25 10C13.25 9.66 13.21 9.32 13.17 9H10.83ZM14.18 9C14.22 9.33 14.25 9.66 14.25 10C14.25 10.34 14.22 10.67 14.18 11H15.87C15.95 10.68 16 10.35 16 10C16 9.65 15.95 9.32 15.87 9H14.18ZM8.54 12C9 12.83 9.78 13.46 10.7 13.78C10.4 13.22 10.18 12.63 10 12H8.54ZM11.04 12C11.25 12.72 11.59 13.38 12 14C12.42 13.38 12.75 12.72 12.96 12H11.04ZM14 12C13.82 12.63 13.59 13.22 13.29 13.78C14.21 13.46 15 12.83 15.46 12H14ZM7 17H17V19H7V17Z" />
    </Svg>
  );
};
