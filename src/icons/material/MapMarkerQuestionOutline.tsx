import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MapMarkerQuestionOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 1C7.59 1 4 4.59 4 9C4 14.57 10.96 22.34 11.26 22.67L12 23.5L12.74 22.67C13.04 22.34 20 14.57 20 9C20 4.59 16.41 1 12 1ZM12 20.47C9.82 17.86 6 12.54 6 9C6 7.4087 6.63214 5.88258 7.75736 4.75736C8.88258 3.63214 10.4087 3 12 3C13.5913 3 15.1174 3.63214 16.2426 4.75736C17.3679 5.88258 18 7.4087 18 9C18 12.83 13.75 18.36 12 20.47ZM11.13 14H12.88V15.75H11.13V14ZM12 5C11.0717 5 10.1815 5.36875 9.52513 6.02513C8.86875 6.6815 8.5 7.57174 8.5 8.5H10.25C10.25 8.03587 10.4344 7.59075 10.7626 7.26256C11.0908 6.93437 11.5359 6.75 12 6.75C12.4641 6.75 12.9092 6.93437 13.2374 7.26256C13.5656 7.59075 13.75 8.03587 13.75 8.5C13.75 10.26 11.13 10.04 11.13 12.88H12.88C12.88 10.91 15.5 10.69 15.5 8.5C15.5 7.57174 15.1313 6.6815 14.4749 6.02513C13.8185 5.36875 12.9283 5 12 5Z" />
    </Svg>
  );
};
