import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FlowerPoppyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.5 12C19.4283 12 20.3185 11.6313 20.9749 10.9749C21.6313 10.3185 22 9.42826 22 8.5C22 7.64641 21.8319 6.80117 21.5052 6.01256C21.1786 5.22394 20.6998 4.50739 20.0962 3.90381C19.4926 3.30023 18.7761 2.82144 17.9874 2.49478C17.1988 2.16813 16.3536 2 15.5 2C14.5717 2 13.6815 2.36875 13.0251 3.02513C12.3687 3.6815 12 4.57174 12 5.5C12 4.57174 11.6313 3.6815 10.9749 3.02513C10.3185 2.36875 9.42826 2 8.5 2C6.77609 2 5.12279 2.68482 3.90381 3.90381C2.68482 5.12279 2 6.77609 2 8.5C2 9.42826 2.36875 10.3185 3.02513 10.9749C3.6815 11.6313 4.57174 12 5.5 12C4.57174 12 3.6815 12.3687 3.02513 13.0251C2.36875 13.6815 2 14.5717 2 15.5C2 16.3536 2.16813 17.1988 2.49478 17.9874C2.82144 18.7761 3.30023 19.4926 3.90381 20.0962C5.12279 21.3152 6.77609 22 8.5 22C9.42826 22 10.3185 21.6313 10.9749 20.9749C11.6313 20.3185 12 19.4283 12 18.5C12 19.4283 12.3687 20.3185 13.0251 20.9749C13.6815 21.6313 14.5717 22 15.5 22C16.3536 22 17.1988 21.8319 17.9874 21.5052C18.7761 21.1786 19.4926 20.6998 20.0962 20.0962C20.6998 19.4926 21.1786 18.7761 21.5052 17.9874C21.8319 17.1988 22 16.3536 22 15.5C22 14.5717 21.6313 13.6815 20.9749 13.0251C20.3185 12.3687 19.4283 12 18.5 12ZM12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16ZM14.5 12C14.5 12.663 14.2366 13.2989 13.7678 13.7678C13.2989 14.2366 12.663 14.5 12 14.5C11.337 14.5 10.7011 14.2366 10.2322 13.7678C9.76339 13.2989 9.5 12.663 9.5 12C9.5 11.337 9.76339 10.7011 10.2322 10.2322C10.7011 9.76339 11.337 9.5 12 9.5C12.663 9.5 13.2989 9.76339 13.7678 10.2322C14.2366 10.7011 14.5 11.337 14.5 12Z" />
    </Svg>
  );
};
