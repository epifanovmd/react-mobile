import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DecimalCommaDecreaseIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 13V16H4L3 13C3 12.7348 3.10536 12.4804 3.29289 12.2929C3.48043 12.1054 3.73478 12 4 12C4.26522 12 4.51957 12.1054 4.70711 12.2929C4.89464 12.4804 5 12.7348 5 13ZM15 16V14L12 17L15 20V18H21V16H15ZM12 11C12 11.7956 11.6839 12.5587 11.1213 13.1213C10.5587 13.6839 9.79565 14 9 14C8.20435 14 7.44129 13.6839 6.87868 13.1213C6.31607 12.5587 6 11.7956 6 11V8C6 7.20435 6.31607 6.44129 6.87868 5.87868C7.44129 5.31607 8.20435 5 9 5C9.79565 5 10.5587 5.31607 11.1213 5.87868C11.6839 6.44129 12 7.20435 12 8V11ZM10 8C10 7.73478 9.89464 7.48043 9.70711 7.29289C9.51957 7.10536 9.26522 7 9 7C8.73478 7 8.48043 7.10536 8.29289 7.29289C8.10536 7.48043 8 7.73478 8 8V11C8 11.2652 8.10536 11.5196 8.29289 11.7071C8.48043 11.8946 8.73478 12 9 12C9.26522 12 9.51957 11.8946 9.70711 11.7071C9.89464 11.5196 10 11.2652 10 11V8Z" />
    </Svg>
  );
};
