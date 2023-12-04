import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BlindsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 2H21C21.2652 2 21.5196 2.10536 21.7071 2.29289C21.8946 2.48043 22 2.73478 22 3V5C22 5.26522 21.8946 5.51957 21.7071 5.70711C21.5196 5.89464 21.2652 6 21 6H20V13C20 13.2652 19.8946 13.5196 19.7071 13.7071C19.5196 13.8946 19.2652 14 19 14H13V16.17C14.17 16.58 15 17.69 15 19C15 19.7956 14.6839 20.5587 14.1213 21.1213C13.5587 21.6839 12.7956 22 12 22C11.2044 22 10.4413 21.6839 9.87868 21.1213C9.31607 20.5587 9 19.7956 9 19C9 17.69 9.83 16.58 11 16.17V14H5C4.73478 14 4.48043 13.8946 4.29289 13.7071C4.10536 13.5196 4 13.2652 4 13V6H3C2.73478 6 2.48043 5.89464 2.29289 5.70711C2.10536 5.51957 2 5.26522 2 5V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2ZM12 18C11.7348 18 11.4804 18.1054 11.2929 18.2929C11.1054 18.4804 11 18.7348 11 19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19C13 18.7348 12.8946 18.4804 12.7071 18.2929C12.5196 18.1054 12.2652 18 12 18Z" />
    </Svg>
  );
};
