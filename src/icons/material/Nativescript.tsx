import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NativescriptIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.5 3H16.5C19 3 21 5 21 7.5V16.5C21 19 19 21 16.5 21H7.5C5 21 3 19 3 16.5V7.5C3 5 5 3 7.5 3ZM6 13.5V16.5C6 16.8978 6.15804 17.2794 6.43934 17.5607C6.72064 17.842 7.10218 18 7.5 18H9V10.5L15 18H16.5C16.8978 18 17.2794 17.842 17.5607 17.5607C17.842 17.2794 18 16.8978 18 16.5V13.5C18 13.1022 18.158 12.7206 18.4393 12.4393C18.7206 12.158 19.1022 12 19.5 12C19.1022 12 18.7206 11.842 18.4393 11.5607C18.158 11.2794 18 10.8978 18 10.5V7.5C18 7.10218 17.842 6.72064 17.5607 6.43934C17.2794 6.15804 16.8978 6 16.5 6H15V13.5L9 6H7.5C7.10218 6 6.72064 6.15804 6.43934 6.43934C6.15804 6.72064 6 7.10218 6 7.5V10.5C6 10.8978 5.84196 11.2794 5.56066 11.5607C5.27936 11.842 4.89782 12 4.5 12C4.89782 12 5.27936 12.158 5.56066 12.4393C5.84196 12.7206 6 13.1022 6 13.5Z" />
    </Svg>
  );
};
