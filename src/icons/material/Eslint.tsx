import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EslintIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.94994 9.55L11.8399 7.3C11.9399 7.25 12.0599 7.25 12.1599 7.3L16.0499 9.55C16.1499 9.61 16.2099 9.71 16.2099 9.82V14.32C16.2099 14.43 16.1499 14.53 16.0499 14.59L12.1599 16.84C12.0599 16.89 11.9399 16.89 11.8399 16.84L7.94994 14.59C7.84994 14.53 7.78994 14.43 7.78994 14.32V9.82C7.78994 9.71 7.84994 9.61 7.94994 9.55ZM22.1199 11.6C22.2899 11.89 22.2899 12.23 22.1199 12.53L17.4699 20.56C17.2999 20.86 16.9999 21 16.6499 21H7.34994C6.99994 21 6.69994 20.85 6.52994 20.56L1.87994 12.53C1.70994 12.24 1.70994 11.87 1.87994 11.58L6.52994 3.5C6.69994 3.22 6.99994 3 7.34994 3H16.6499C16.9999 3 17.2999 3.22 17.4699 3.5L22.1199 11.6ZM18.2699 15.5V8.65C18.2699 8.53 18.1999 8.42 18.0899 8.36L12.1599 4.95C12.0599 4.89 11.9299 4.89 11.8299 4.95L5.90994 8.36C5.79994 8.42 5.72994 8.53 5.72994 8.65V15.5C5.72994 15.61 5.79994 15.72 5.90994 15.78L11.8399 19.19C11.9399 19.25 12.0699 19.25 12.1699 19.19L18.0899 15.78C18.1999 15.72 18.2699 15.61 18.2699 15.5Z" />
    </Svg>
  );
};
