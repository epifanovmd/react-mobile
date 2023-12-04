import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CursorPointerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13.75 10.19L14.38 10.32L18.55 12.4C19.25 12.63 19.71 13.32 19.65 14.06V14.19V14.32L18.75 20.44C18.69 20.87 18.5 21.27 18.15 21.55C17.84 21.85 17.43 22 17 22H10.12C9.62999 22 9.17999 21.82 8.84999 21.47L2.85999 15.5L3.75999 14.5C3.99999 14.25 4.37999 14.11 4.73999 14.13H5.02999L8.99999 15V4.5C8.99999 3.96957 9.2107 3.46086 9.58577 3.08579C9.96085 2.71071 10.4696 2.5 11 2.5C11.5304 2.5 12.0391 2.71071 12.4142 3.08579C12.7893 3.46086 13 3.96957 13 4.5V10.19H13.75Z" />
    </Svg>
  );
};
