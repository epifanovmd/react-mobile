import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const Brightness7Icon: FC<FlexSvgProps> = ({
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
      <Path d="M11.9999 7.99994C10.9391 7.99994 9.92166 8.42137 9.17151 9.17151C8.42137 9.92166 7.99994 10.9391 7.99994 11.9999C7.99994 13.0608 8.42137 14.0782 9.17151 14.8284C9.92166 15.5785 10.9391 15.9999 11.9999 15.9999C13.0608 15.9999 14.0782 15.5785 14.8284 14.8284C15.5785 14.0782 15.9999 13.0608 15.9999 11.9999C15.9999 10.9391 15.5785 9.92166 14.8284 9.17151C14.0782 8.42137 13.0608 7.99994 11.9999 7.99994ZM11.9999 17.9999C10.4086 17.9999 8.88252 17.3678 7.7573 16.2426C6.63208 15.1174 5.99994 13.5912 5.99994 11.9999C5.99994 10.4086 6.63208 8.88252 7.7573 7.7573C8.88252 6.63208 10.4086 5.99994 11.9999 5.99994C13.5912 5.99994 15.1174 6.63208 16.2426 7.7573C17.3678 8.88252 17.9999 10.4086 17.9999 11.9999C17.9999 13.5912 17.3678 15.1174 16.2426 16.2426C15.1174 17.3678 13.5912 17.9999 11.9999 17.9999ZM19.9999 8.68994V3.99994H15.3099L11.9999 0.689941L8.68994 3.99994H3.99994V8.68994L0.689941 11.9999L3.99994 15.3099V19.9999H8.68994L11.9999 23.3099L15.3099 19.9999H19.9999V15.3099L23.3099 11.9999L19.9999 8.68994Z" />
    </Svg>
  );
};
