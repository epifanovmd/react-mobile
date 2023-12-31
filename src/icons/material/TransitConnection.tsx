import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TransitConnectionIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15 12C15 10.7 14.16 9.6 13 9.18V6.82C14.16 6.4 15 5.3 15 4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4C9 5.3 9.84 6.4 11 6.82V9.19C9.84 9.6 9 10.7 9 12C9 13.3 9.84 14.4 11 14.82V17.18C9.84 17.6 9 18.7 9 20C9 20.7956 9.31607 21.5587 9.87868 22.1213C10.4413 22.6839 11.2044 23 12 23C12.7956 23 13.5587 22.6839 14.1213 22.1213C14.6839 21.5587 15 20.7956 15 20C15 18.7 14.16 17.6 13 17.18V14.82C14.16 14.4 15 13.3 15 12ZM12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289C12.8946 3.48043 13 3.73478 13 4C13 4.26522 12.8946 4.51957 12.7071 4.70711C12.5196 4.89464 12.2652 5 12 5C11.7348 5 11.4804 4.89464 11.2929 4.70711C11.1054 4.51957 11 4.26522 11 4C11 3.73478 11.1054 3.48043 11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3ZM12 21C11.7348 21 11.4804 20.8946 11.2929 20.7071C11.1054 20.5196 11 20.2652 11 20C11 19.7348 11.1054 19.4804 11.2929 19.2929C11.4804 19.1054 11.7348 19 12 19C12.2652 19 12.5196 19.1054 12.7071 19.2929C12.8946 19.4804 13 19.7348 13 20C13 20.2652 12.8946 20.5196 12.7071 20.7071C12.5196 20.8946 12.2652 21 12 21Z" />
    </Svg>
  );
};
