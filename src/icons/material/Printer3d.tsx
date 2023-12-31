import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Printer3dIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 6C19.2652 6 19.5196 5.89464 19.7071 5.70711C19.8946 5.51957 20 5.26522 20 5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4C18.7348 4 18.4804 4.10536 18.2929 4.29289C18.1054 4.48043 18 4.73478 18 5C18 5.26522 18.1054 5.51957 18.2929 5.70711C18.4804 5.89464 18.7348 6 19 6ZM19 2C19.7956 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V11H18V7H6V11H2V5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H19ZM18 18.25C18 18.63 17.79 18.96 17.47 19.13L12.57 21.82C12.4 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L6.53 19.13C6.21 18.96 6 18.63 6 18.25V13C6 12.62 6.21 12.29 6.53 12.12L11.43 9.68C11.59 9.56 11.79 9.5 12 9.5C12.21 9.5 12.4 9.56 12.57 9.68L17.47 12.12C17.79 12.29 18 12.62 18 13V18.25ZM12 11.65L9.04 13L12 14.6L14.96 13L12 11.65ZM8 17.66L11 19.29V16.33L8 14.71V17.66ZM16 17.66V14.71L13 16.33V19.29L16 17.66Z" />
    </Svg>
  );
};
