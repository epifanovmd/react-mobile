import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ShoppingIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 13C10.6739 13 9.40215 12.4732 8.46447 11.5355C7.52678 10.5979 7 9.32608 7 8H9C9 8.79565 9.31607 9.55871 9.87868 10.1213C10.4413 10.6839 11.2044 11 12 11C12.7956 11 13.5587 10.6839 14.1213 10.1213C14.6839 9.55871 15 8.79565 15 8H17C17 9.32608 16.4732 10.5979 15.5355 11.5355C14.5979 12.4732 13.3261 13 12 13ZM12 3C12.7956 3 13.5587 3.31607 14.1213 3.87868C14.6839 4.44129 15 5.20435 15 6H9C9 5.20435 9.31607 4.44129 9.87868 3.87868C10.4413 3.31607 11.2044 3 12 3ZM19 6H17C17 5.34339 16.8707 4.69321 16.6194 4.08658C16.3681 3.47995 15.9998 2.92876 15.5355 2.46447C15.0712 2.00017 14.52 1.63188 13.9134 1.3806C13.3068 1.12933 12.6566 1 12 1C10.6739 1 9.40215 1.52678 8.46447 2.46447C7.52678 3.40215 7 4.67392 7 6H5C3.89 6 3 6.89 3 8V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V8C21 6.89 20.1 6 19 6Z" />
    </Svg>
  );
};
