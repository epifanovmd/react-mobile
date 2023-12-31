import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CameraDocumentOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8401 22.73L20.1101 22H3.00011V20H18.1101L12.8901 14.78L13.0001 15H6.00011L8.00011 11H9.11011L8.11011 9.99998H8.00011C6.90011 9.99998 6.00011 9.09998 6.00011 7.99998V7.88998L1.11011 2.99998L2.39011 1.72998L22.1101 21.46L20.8401 22.73ZM13.0001 7.99998C13.7401 7.99998 14.3801 7.59998 14.7201 6.99998H19.0001V15.8L21.0001 17.8V6.99998C21.0001 5.88998 20.1101 4.99998 19.0001 4.99998H14.7201C14.3801 4.40998 13.7401 3.99998 13.0001 3.99998C13.0001 2.89998 12.1001 1.99998 11.0001 1.99998H8.00011C7.24011 1.99998 6.59011 2.42998 6.25011 3.04998L12.5001 9.29998C12.8101 8.94998 13.0001 8.49998 13.0001 7.99998Z" />
    </Svg>
  );
};
