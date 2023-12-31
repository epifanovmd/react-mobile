import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TableColumnPlusAfterIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 2C11.5304 2 12.0391 2.21071 12.4142 2.58579C12.7893 2.96086 13 3.46957 13 4V20C13 20.5304 12.7893 21.0391 12.4142 21.4142C12.0391 21.7893 11.5304 22 11 22H2V2H11ZM4 10V14H11V10H4ZM4 16V20H11V16H4ZM4 4V8H11V4H4ZM15 11H18V8H20V11H23V13H20V16H18V13H15V11Z" />
    </Svg>
  );
};
