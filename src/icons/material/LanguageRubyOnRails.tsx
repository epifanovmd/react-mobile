import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LanguageRubyOnRailsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.8 16.7004C19.8 16.7004 21.6 16.5004 21.6 14.3004C21.6 12.1004 19.5 11.8004 19.5 11.8004H15.7V19.0004H17.6V17.3004L19.3 19.0004H22L19.8 16.7004ZM19 15.3004H17.5V13.7004H19C19 13.7004 19.4 13.9004 19.4 14.5004C19.5 15.1004 19 15.3004 19 15.3004ZM21.3 8.20039V8.40039C13.2 6.10039 10 13.2004 10.6 18.7004C10.6 18.7004 4.9 18.7004 4.3 18.7004C5 13.3004 11.8 2.60039 21.3 8.20039ZM20.5 6.90039C19.8 6.60039 19.1 6.30039 18.4 6.10039L18.5 4.80039L20.6 5.60039L20.5 6.90039ZM18.5 8.70039C19.2 8.70039 19.9 8.80039 20.6 9.00039L20.5 10.2004L18.7 10.0004L18.5 8.70039ZM13.9 5.80039L13.5 4.60039L15.6 4.40039L16 5.70039C15.8 5.70039 14.1 5.80039 13.9 5.80039ZM15.2 9.50039C15.6 9.30039 16.3 9.00039 17.2 8.80039L17.6 10.0004L15.8 10.7004L15.2 9.50039ZM11.8 6.50039C11.2 6.80039 10.6 7.10039 10 7.50039L9.2 6.20039L11 5.20039L11.8 6.50039ZM14.3 10.1004L15.1 11.3004L14 12.6004L12.9 11.6004C13.2 11.0004 13.7 10.5004 14.3 10.1004ZM11.6 15.0004C11.7 14.2004 11.9 13.5004 12.2 12.7004L13.4 13.7004L13.1 15.6004L11.6 15.0004ZM7.9 9.30039C7.4 9.80039 6.9 10.4004 6.5 10.9004L5.2 9.80039L6.7 8.20039L7.9 9.30039ZM4.8 13.7004C4.4 14.5004 4.1 15.3004 3.8 16.0004L2 15.3004L2.9 13.0004L4.8 13.7004ZM11.5 16.3004L13.3 16.9004L13.6 18.9004L11.6 18.4004C11.6 18.2004 11.5 17.5004 11.5 16.3004Z" />
    </Svg>
  );
};
