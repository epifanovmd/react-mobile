import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RunFastIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16.5 5.5C17.0304 5.5 17.5391 5.28929 17.9142 4.91421C18.2893 4.53914 18.5 4.03043 18.5 3.5C18.5 2.96957 18.2893 2.46086 17.9142 2.08579C17.5391 1.71071 17.0304 1.5 16.5 1.5C15.9696 1.5 15.4609 1.71071 15.0858 2.08579C14.7107 2.46086 14.5 2.96957 14.5 3.5C14.5 4.03043 14.7107 4.53914 15.0858 4.91421C15.4609 5.28929 15.9696 5.5 16.5 5.5ZM12.9 19.4L13.9 15L16 17V23H18V15.5L15.9 13.5L16.5 10.5C17.89 12.09 19.89 13 22 13V11C20.24 11.03 18.6 10.11 17.7 8.6L16.7 7C16.34 6.4 15.7 6 15 6C14.7 6 14.5 6.1 14.2 6.1L9 8.3V13H11V9.6L12.8 8.9L11.2 17L6.3 16L5.9 18L12.9 19.4ZM4 9C3.73478 9 3.48043 8.89464 3.29289 8.70711C3.10536 8.51957 3 8.26522 3 8C3 7.73478 3.10536 7.48043 3.29289 7.29289C3.48043 7.10536 3.73478 7 4 7H7V9H4ZM5 5C4.73478 5 4.48043 4.89464 4.29289 4.70711C4.10536 4.51957 4 4.26522 4 4C4 3.73478 4.10536 3.48043 4.29289 3.29289C4.48043 3.10536 4.73478 3 5 3H10V5H5ZM3 13C2.73478 13 2.48043 12.8946 2.29289 12.7071C2.10536 12.5196 2 12.2652 2 12C2 11.7348 2.10536 11.4804 2.29289 11.2929C2.48043 11.1054 2.73478 11 3 11H7V13H3Z" />
    </Svg>
  );
};
