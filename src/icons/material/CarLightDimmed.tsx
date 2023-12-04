import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarLightDimmedIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.9999 4.7998C8.9999 4.7998 8.9999 19.1998 12.9999 19.1998C16.9999 19.1998 21.9999 16.4998 21.9999 11.9998C21.9999 7.4998 16.9999 4.7998 12.9999 4.7998ZM13.0999 17.1998C12.6999 16.7998 11.9999 14.9998 11.9999 11.9998C11.9999 8.9998 12.6999 7.1998 13.0999 6.7998C15.9999 6.8998 19.9999 8.6998 19.9999 11.9998C19.9999 15.2998 15.8999 17.0998 13.0999 17.1998ZM7.9999 10.4998C7.9999 10.9998 7.8999 11.4998 7.8999 11.9998C7.8999 12.1998 7.8999 12.3998 7.8999 12.5998L2.3999 13.9998L1.8999 12.0998L7.9999 10.4998ZM1.9999 6.9998L9.3999 5.0998C9.1999 5.3998 8.9999 5.7998 8.8999 6.2998C8.7999 6.5998 8.6999 6.9998 8.5999 7.3998L2.4999 8.8998L1.9999 6.9998ZM8.1999 15.4998C8.2999 16.1998 8.4999 16.8998 8.6999 17.3998L2.3999 18.9998L1.8999 17.0998L8.1999 15.4998Z" />
    </Svg>
  );
};
