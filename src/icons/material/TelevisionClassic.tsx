import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TelevisionClassicIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.16 3L6.75 4.41L9.34 7H4C2.89 7 2 7.89 2 9V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V9C22 7.89 21.11 7 20 7H14.66L17.25 4.41L15.84 3L12 6.84L8.16 3ZM4 9H17V19H4V9ZM19.5 9C19.7652 9 20.0196 9.10536 20.2071 9.29289C20.3946 9.48043 20.5 9.73478 20.5 10C20.5 10.2652 20.3946 10.5196 20.2071 10.7071C20.0196 10.8946 19.7652 11 19.5 11C19.2348 11 18.9804 10.8946 18.7929 10.7071C18.6054 10.5196 18.5 10.2652 18.5 10C18.5 9.73478 18.6054 9.48043 18.7929 9.29289C18.9804 9.10536 19.2348 9 19.5 9ZM19.5 12C19.7652 12 20.0196 12.1054 20.2071 12.2929C20.3946 12.4804 20.5 12.7348 20.5 13C20.5 13.2652 20.3946 13.5196 20.2071 13.7071C20.0196 13.8946 19.7652 14 19.5 14C19.2348 14 18.9804 13.8946 18.7929 13.7071C18.6054 13.5196 18.5 13.2652 18.5 13C18.5 12.7348 18.6054 12.4804 18.7929 12.2929C18.9804 12.1054 19.2348 12 19.5 12Z" />
    </Svg>
  );
};
