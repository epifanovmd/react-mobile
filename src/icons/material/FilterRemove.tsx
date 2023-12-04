import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FilterRemoveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.76 20.83L17.6 18L14.76 15.17L16.17 13.76L19 16.57L21.83 13.76L23.24 15.17L20.43 18L23.24 20.83L21.83 22.24L19 19.4L16.17 22.24L14.76 20.83ZM12 12V19.88C12.04 20.18 11.94 20.5 11.71 20.71C11.32 21.1 10.69 21.1 10.3 20.71L8.28998 18.7C8.05998 18.47 7.95998 18.16 7.99998 17.87V12H7.96998L2.20998 4.62C1.86998 4.19 1.94998 3.56 2.37998 3.22C2.56998 3.08 2.77998 3 2.99998 3H17C17.22 3 17.43 3.08 17.62 3.22C18.05 3.56 18.13 4.19 17.79 4.62L12.03 12H12Z" />
    </Svg>
  );
};
