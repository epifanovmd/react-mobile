import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FruitCherriesIcon: FC<FlexSvgProps> = ({
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
      <Path d="M16 13.0004H15.5C14.8 11.7004 14.3 10.0004 13.8 8.30039L14.7 9.20039C17.4 11.3004 19.8 10.9004 19.8 10.9004C19.8 10.9004 20.5 7.10039 17.8 5.10039C15.5 3.30039 13.4 3.30039 12.8 3.40039C12.7 2.80039 12.7 2.30039 12.6 1.90039L11.2 2.00039C11.2 5.20039 8.5 11.1004 7.6 13.0004C5.6 13.2004 4 14.9004 4 17.0004C4 19.2004 5.8 21.0004 8 21.0004C9.1 21.0004 10 20.6004 10.7 19.9004C10.3 19.0004 10 18.0004 10 17.0004C10 16.0004 10.3 15.0004 10.7 14.1004C10.3 13.7004 9.7 13.4004 9.2 13.2004C9.9 11.7004 11.1 9.00039 11.9 6.40039C12.3 8.70039 13.1 11.4004 14.1 13.5004C12.9 14.2004 12 15.5004 12 17.0004C12 19.2004 13.8 21.0004 16 21.0004C18.2 21.0004 20 19.2004 20 17.0004C20 14.8004 18.2 13.0004 16 13.0004ZM8 15.5004C7.2 15.5004 6.5 16.2004 6.5 17.0004H5.5C5.5 15.6004 6.6 14.5004 8 14.5004V15.5004ZM16 15.5004C15.2 15.5004 14.5 16.2004 14.5 17.0004H13.5C13.5 15.6004 14.6 14.5004 16 14.5004V15.5004Z" />
    </Svg>
  );
};
