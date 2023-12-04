import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TrainIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C8 2 4 2.5 4 6V15.5C4 16.4283 4.36875 17.3185 5.02513 17.9749C5.6815 18.6313 6.57174 19 7.5 19L6 20.5V21H8.23L10.23 19H14L16 21H18V20.5L16.5 19C17.4283 19 18.3185 18.6313 18.9749 17.9749C19.6313 17.3185 20 16.4283 20 15.5V6C20 2.5 16.42 2 12 2ZM7.5 17C7.10218 17 6.72064 16.842 6.43934 16.5607C6.15804 16.2794 6 15.8978 6 15.5C6 15.1022 6.15804 14.7206 6.43934 14.4393C6.72064 14.158 7.10218 14 7.5 14C7.89782 14 8.27936 14.158 8.56066 14.4393C8.84196 14.7206 9 15.1022 9 15.5C9 15.8978 8.84196 16.2794 8.56066 16.5607C8.27936 16.842 7.89782 17 7.5 17ZM11 10H6V6H11V10ZM13 10V6H18V10H13ZM16.5 17C16.1022 17 15.7206 16.842 15.4393 16.5607C15.158 16.2794 15 15.8978 15 15.5C15 15.1022 15.158 14.7206 15.4393 14.4393C15.7206 14.158 16.1022 14 16.5 14C16.8978 14 17.2794 14.158 17.5607 14.4393C17.842 14.7206 18 15.1022 18 15.5C18 15.8978 17.842 16.2794 17.5607 16.5607C17.2794 16.842 16.8978 17 16.5 17Z" />
    </Svg>
  );
};
