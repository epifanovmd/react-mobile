import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScatterPlotIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7 11C7.79565 11 8.55871 11.3161 9.12132 11.8787C9.68393 12.4413 10 13.2044 10 14C10 14.7956 9.68393 15.5587 9.12132 16.1213C8.55871 16.6839 7.79565 17 7 17C6.20435 17 5.44129 16.6839 4.87868 16.1213C4.31607 15.5587 4 14.7956 4 14C4 13.2044 4.31607 12.4413 4.87868 11.8787C5.44129 11.3161 6.20435 11 7 11ZM11 3C11.7956 3 12.5587 3.31607 13.1213 3.87868C13.6839 4.44129 14 5.20435 14 6C14 6.79565 13.6839 7.55871 13.1213 8.12132C12.5587 8.68393 11.7956 9 11 9C10.2044 9 9.44129 8.68393 8.87868 8.12132C8.31607 7.55871 8 6.79565 8 6C8 5.20435 8.31607 4.44129 8.87868 3.87868C9.44129 3.31607 10.2044 3 11 3ZM16.6 14.6C18.25 14.6 19.6 15.94 19.6 17.6C19.6 18.3956 19.2839 19.1587 18.7213 19.7213C18.1587 20.2839 17.3956 20.6 16.6 20.6C14.94 20.6 13.6 19.25 13.6 17.6C13.6 16.8044 13.9161 16.0413 14.4787 15.4787C15.0413 14.9161 15.8044 14.6 16.6 14.6Z" />
    </Svg>
  );
};
