import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SmogIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C10.08 2 8.5 3.35 8.09 5.15C7.45 4.44 6.53 4 5.5 4C4.57174 4 3.6815 4.36875 3.02513 5.02513C2.36875 5.6815 2 6.57174 2 7.5C2 8.42826 2.36875 9.3185 3.02513 9.97487C3.6815 10.6313 4.57174 11 5.5 11H6.68V12H10.72V11H13.28V12H17.32V11H18.5C19.4283 11 20.3185 10.6313 20.9749 9.97487C21.6313 9.3185 22 8.42826 22 7.5C22 6.57174 21.6313 5.6815 20.9749 5.02513C20.3185 4.36875 19.4283 4 18.5 4C17.47 4 16.55 4.44 15.91 5.15C15.5 3.35 13.92 2 12 2ZM7.2 14L6.4 22H11L10.2 14H7.2ZM13.8 14L13 22H17.6L16.8 14H13.8Z" />
    </Svg>
  );
};
