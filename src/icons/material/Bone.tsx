import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BoneIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8 14C8 14.7956 7.68393 15.5587 7.12132 16.1213C6.55871 16.6839 5.79565 17 5 17C4.20435 17 3.44129 16.6839 2.87868 16.1213C2.31607 15.5587 2 14.7956 2 14C2 13.23 2.29 12.53 2.76 12C2.29 11.47 2 10.77 2 10C2 9.20435 2.31607 8.44129 2.87868 7.87868C3.44129 7.31607 4.20435 7 5 7C5.79565 7 6.55871 7.31607 7.12132 7.87868C7.68393 8.44129 8 9.20435 8 10C9.33 10.08 10.67 10.17 12 10.17C13.33 10.17 14.67 10.08 16 10C16 9.20435 16.3161 8.44129 16.8787 7.87868C17.4413 7.31607 18.2044 7 19 7C19.7956 7 20.5587 7.31607 21.1213 7.87868C21.6839 8.44129 22 9.20435 22 10C22 10.77 21.71 11.47 21.24 12C21.71 12.53 22 13.23 22 14C22 14.7956 21.6839 15.5587 21.1213 16.1213C20.5587 16.6839 19.7956 17 19 17C18.2044 17 17.4413 16.6839 16.8787 16.1213C16.3161 15.5587 16 14.7956 16 14C14.67 13.92 13.33 13.83 12 13.83C10.67 13.83 9.33 13.92 8 14Z" />
    </Svg>
  );
};
