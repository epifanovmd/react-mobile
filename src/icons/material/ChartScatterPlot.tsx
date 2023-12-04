import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChartScatterPlotIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 2H4V20H22V22H2V2ZM9 10C9.79565 10 10.5587 10.3161 11.1213 10.8787C11.6839 11.4413 12 12.2044 12 13C12 13.7956 11.6839 14.5587 11.1213 15.1213C10.5587 15.6839 9.79565 16 9 16C8.20435 16 7.44129 15.6839 6.87868 15.1213C6.31607 14.5587 6 13.7956 6 13C6 12.2044 6.31607 11.4413 6.87868 10.8787C7.44129 10.3161 8.20435 10 9 10ZM13 2C13.7956 2 14.5587 2.31607 15.1213 2.87868C15.6839 3.44129 16 4.20435 16 5C16 5.79565 15.6839 6.55871 15.1213 7.12132C14.5587 7.68393 13.7956 8 13 8C12.2044 8 11.4413 7.68393 10.8787 7.12132C10.3161 6.55871 10 5.79565 10 5C10 4.20435 10.3161 3.44129 10.8787 2.87868C11.4413 2.31607 12.2044 2 13 2ZM18 12C18.7956 12 19.5587 12.3161 20.1213 12.8787C20.6839 13.4413 21 14.2044 21 15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18C17.2044 18 16.4413 17.6839 15.8787 17.1213C15.3161 16.5587 15 15.7956 15 15C15 14.2044 15.3161 13.4413 15.8787 12.8787C16.4413 12.3161 17.2044 12 18 12Z" />
    </Svg>
  );
};
