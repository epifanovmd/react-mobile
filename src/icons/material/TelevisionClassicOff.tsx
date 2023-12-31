import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TelevisionClassicOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 5.27L3.28 4L21 21.72L19.73 23L17.73 21H4C2.89 21 2 20.11 2 19V9C2 8 2.76 7.14 3.75 7L2 5.27ZM8.16 3L12 6.84L15.84 3L17.25 4.41L14.66 7H20C21.11 7 22 7.89 22 9V19C22 19.34 21.92 19.66 21.77 19.94L17 15.18V9H10.82L8.82 7H9.34L6.75 4.41L8.16 3ZM4 9V19H15.73L5.73 9H4ZM19.5 9C19.2348 9 18.9804 9.10536 18.7929 9.29289C18.6054 9.48043 18.5 9.73478 18.5 10C18.5 10.2652 18.6054 10.5196 18.7929 10.7071C18.9804 10.8946 19.2348 11 19.5 11C19.7652 11 20.0196 10.8946 20.2071 10.7071C20.3946 10.5196 20.5 10.2652 20.5 10C20.5 9.73478 20.3946 9.48043 20.2071 9.29289C20.0196 9.10536 19.7652 9 19.5 9ZM19.5 12C19.2348 12 18.9804 12.1054 18.7929 12.2929C18.6054 12.4804 18.5 12.7348 18.5 13C18.5 13.2652 18.6054 13.5196 18.7929 13.7071C18.9804 13.8946 19.2348 14 19.5 14C19.7652 14 20.0196 13.8946 20.2071 13.7071C20.3946 13.5196 20.5 13.2652 20.5 13C20.5 12.7348 20.3946 12.4804 20.2071 12.2929C20.0196 12.1054 19.7652 12 19.5 12Z" />
    </Svg>
  );
};
