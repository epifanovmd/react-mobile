import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TrafficLightIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 9C11.4696 9 10.9609 8.78929 10.5858 8.41421C10.2107 8.03914 10 7.53043 10 7C10 5.89 10.9 5 12 5C13.11 5 14 5.89 14 7C14 7.53043 13.7893 8.03914 13.4142 8.41421C13.0391 8.78929 12.5304 9 12 9ZM12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 10.89 10.9 10 12 10C13.11 10 14 10.89 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14ZM12 19C11.4696 19 10.9609 18.7893 10.5858 18.4142C10.2107 18.0391 10 17.5304 10 17C10 15.89 10.9 15 12 15C13.11 15 14 15.89 14 17C14 17.5304 13.7893 18.0391 13.4142 18.4142C13.0391 18.7893 12.5304 19 12 19ZM20 10H17V8.86C18.72 8.41 20 6.86 20 5H17V4C17 3.73478 16.8946 3.48043 16.7071 3.29289C16.5196 3.10536 16.2652 3 16 3H8C7.73478 3 7.48043 3.10536 7.29289 3.29289C7.10536 3.48043 7 3.73478 7 4V5H4C4 6.86 5.28 8.41 7 8.86V10H4C4 11.86 5.28 13.41 7 13.86V15H4C4 16.86 5.28 18.41 7 18.86V20C7 20.2652 7.10536 20.5196 7.29289 20.7071C7.48043 20.8946 7.73478 21 8 21H16C16.2652 21 16.5196 20.8946 16.7071 20.7071C16.8946 20.5196 17 20.2652 17 20V18.86C18.72 18.41 20 16.86 20 15H17V13.86C18.72 13.41 20 11.86 20 10Z" />
    </Svg>
  );
};
