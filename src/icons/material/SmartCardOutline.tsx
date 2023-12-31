import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SmartCardOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 3H2C1.47512 3.01747 0.976497 3.23379 0.605143 3.60514C0.23379 3.9765 0.0174689 4.47512 0 5L0 19C0.0174689 19.5249 0.23379 20.0235 0.605143 20.3949C0.976497 20.7662 1.47512 20.9825 2 21H22C22.5249 20.9825 23.0235 20.7662 23.3949 20.3949C23.7662 20.0235 23.9825 19.5249 24 19V5C23.9825 4.47512 23.7662 3.9765 23.3949 3.60514C23.0235 3.23379 22.5249 3.01747 22 3ZM22 19H2V5H22V19ZM14 17V15.75C14 14.09 10.66 13.25 9 13.25C7.34 13.25 4 14.09 4 15.75V17H14ZM9 7C8.50555 7 8.0222 7.14662 7.61107 7.42133C7.19995 7.69603 6.87952 8.08648 6.6903 8.54329C6.50108 9.00011 6.45157 9.50277 6.54804 9.98773C6.6445 10.4727 6.8826 10.9181 7.23223 11.2678C7.58186 11.6174 8.02732 11.8555 8.51227 11.952C8.99723 12.0484 9.49989 11.9989 9.95671 11.8097C10.4135 11.6205 10.804 11.3 11.0787 10.8889C11.3534 10.4778 11.5 9.99445 11.5 9.5C11.5 9.1717 11.4353 8.84661 11.3097 8.54329C11.1841 8.23998 10.9999 7.96438 10.7678 7.73223C10.5356 7.50009 10.26 7.31594 9.95671 7.1903C9.65339 7.06466 9.3283 7 9 7ZM15 10V13H19V10H15Z" />
    </Svg>
  );
};
