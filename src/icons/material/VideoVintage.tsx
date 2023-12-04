import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VideoVintageIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 14.501V11.001C18 10.7357 17.8947 10.4814 17.7071 10.2938C17.5196 10.1063 17.2652 10.001 17 10.001H16C18.24 8.39096 18.76 5.27096 17.15 3.00096C15.54 0.780957 12.42 0.260957 10.17 1.87096C9.50001 2.35096 8.96001 3.00096 8.60001 3.73096C6.25001 2.28096 3.17001 3.00096 1.72001 5.37096C0.280013 7.72096 1.00001 10.801 3.36001 12.251C3.57001 12.371 3.78001 12.501 4.00001 12.581V21.001C4.00001 21.2662 4.10537 21.5205 4.29291 21.7081C4.48044 21.8956 4.7348 22.001 5.00001 22.001H17C17.2652 22.001 17.5196 21.8956 17.7071 21.7081C17.8947 21.5205 18 21.2662 18 21.001V17.501L22 21.501V10.501L18 14.501ZM13 4.00096C13.5304 4.00096 14.0392 4.21167 14.4142 4.58674C14.7893 4.96182 15 5.47052 15 6.00096C15 6.53139 14.7893 7.0401 14.4142 7.41517C14.0392 7.79024 13.5304 8.00096 13 8.00096C12.4696 8.00096 11.9609 7.79024 11.5858 7.41517C11.2107 7.0401 11 6.53139 11 6.00096C11 5.47052 11.2107 4.96182 11.5858 4.58674C11.9609 4.21167 12.4696 4.00096 13 4.00096ZM6.00001 6.00096C6.53045 6.00096 7.03915 6.21167 7.41423 6.58674C7.7893 6.96182 8.00001 7.47052 8.00001 8.00096C8.00001 8.53139 7.7893 9.0401 7.41423 9.41517C7.03915 9.79024 6.53045 10.001 6.00001 10.001C5.46958 10.001 4.96087 9.79024 4.5858 9.41517C4.21073 9.0401 4.00001 8.53139 4.00001 8.00096C4.00001 7.47052 4.21073 6.96182 4.5858 6.58674C4.96087 6.21167 5.46958 6.00096 6.00001 6.00096Z" />
    </Svg>
  );
};
