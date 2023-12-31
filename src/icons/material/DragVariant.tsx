import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DragVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.6701 12.0001L18.1801 16.5001L15.6701 14.0001L17.6501 12.0001L15.6701 10.0401L18.1801 7.53008L22.6701 12.0001ZM12.0001 1.33008L16.4701 5.82008L13.9601 8.33008L12.0001 6.35008L10.0001 8.33008L7.50008 5.82008L12.0001 1.33008ZM12.0001 22.6701L7.53008 18.1801L10.0401 15.6701L12.0001 17.6501L14.0001 15.6701L16.5001 18.1801L12.0001 22.6701ZM1.33008 12.0001L5.82008 7.50008L8.33008 10.0001L6.35008 12.0001L8.33008 13.9601L5.82008 16.4701L1.33008 12.0001ZM12.0001 10.0001C12.5305 10.0001 13.0392 10.2108 13.4143 10.5859C13.7894 10.9609 14.0001 11.4696 14.0001 12.0001C14.0001 12.5305 13.7894 13.0392 13.4143 13.4143C13.0392 13.7894 12.5305 14.0001 12.0001 14.0001C11.4696 14.0001 10.9609 13.7894 10.5859 13.4143C10.2108 13.0392 10.0001 12.5305 10.0001 12.0001C10.0001 11.4696 10.2108 10.9609 10.5859 10.5859C10.9609 10.2108 11.4696 10.0001 12.0001 10.0001Z" />
    </Svg>
  );
};
