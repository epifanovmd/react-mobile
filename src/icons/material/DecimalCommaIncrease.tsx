import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DecimalCommaIncreaseIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 5C8.20435 5 7.44129 5.31607 6.87868 5.87868C6.31607 6.44129 6 7.20435 6 8V11C6 11.7956 6.31607 12.5587 6.87868 13.1213C7.44129 13.6839 8.20435 14 9 14C9.79565 14 10.5587 13.6839 11.1213 13.1213C11.6839 12.5587 12 11.7956 12 11V8C12 7.20435 11.6839 6.44129 11.1213 5.87868C10.5587 5.31607 9.79565 5 9 5ZM10 11C10 11.2652 9.89464 11.5196 9.70711 11.7071C9.51957 11.8946 9.26522 12 9 12C8.73478 12 8.48043 11.8946 8.29289 11.7071C8.10536 11.5196 8 11.2652 8 11V8C8 7.73478 8.10536 7.48043 8.29289 7.29289C8.48043 7.10536 8.73478 7 9 7C9.26522 7 9.51957 7.10536 9.70711 7.29289C9.89464 7.48043 10 7.73478 10 8V11ZM16 14C16.7956 14 17.5587 13.6839 18.1213 13.1213C18.6839 12.5587 19 11.7956 19 11V8C19 7.20435 18.6839 6.44129 18.1213 5.87868C17.5587 5.31607 16.7956 5 16 5C15.2044 5 14.4413 5.31607 13.8787 5.87868C13.3161 6.44129 13 7.20435 13 8V11C13 11.7956 13.3161 12.5587 13.8787 13.1213C14.4413 13.6839 15.2044 14 16 14ZM15 8C15 7.73478 15.1054 7.48043 15.2929 7.29289C15.4804 7.10536 15.7348 7 16 7C16.2652 7 16.5196 7.10536 16.7071 7.29289C16.8946 7.48043 17 7.73478 17 8V11C17 11.2652 16.8946 11.5196 16.7071 11.7071C16.5196 11.8946 16.2652 12 16 12C15.7348 12 15.4804 11.8946 15.2929 11.7071C15.1054 11.5196 15 11.2652 15 11V8ZM19 20V18H13V16H19V14L22 17L19 20ZM5 13V16H4L3 13C3 12.7348 3.10536 12.4804 3.29289 12.2929C3.48043 12.1054 3.73478 12 4 12C4.26522 12 4.51957 12.1054 4.70711 12.2929C4.89464 12.4804 5 12.7348 5 13Z" />
    </Svg>
  );
};
