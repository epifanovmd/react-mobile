import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ToyBrickSearchOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 6V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H15C14.4696 3 13.9609 3.21071 13.5858 3.58579C13.2107 3.96086 13 4.46957 13 5V6H11V5C11 4.46957 10.7893 3.96086 10.4142 3.58579C10.0391 3.21071 9.53043 3 9 3H7C6.46957 3 5.96086 3.21071 5.58579 3.58579C5.21071 3.96086 5 4.46957 5 5V6H3V20H11.81C11.255 19.4188 10.8111 18.741 10.5 18H5V8H19V9.5C19.741 9.81107 20.4188 10.255 21 10.81V6H19ZM20.31 17.9C20.9002 16.965 21.1255 15.8455 20.943 14.755C20.7604 13.6645 20.1828 12.6793 19.3202 11.9876C18.4577 11.2958 17.3707 10.9457 16.2666 11.0043C15.1624 11.0628 14.1185 11.5257 13.3339 12.3048C12.5494 13.0839 12.0791 14.1246 12.0128 15.2283C11.9465 16.332 12.2889 17.4214 12.9747 18.2888C13.6604 19.1561 14.6414 19.7407 15.7306 19.9309C16.8198 20.1211 17.9409 19.9036 18.88 19.32L22 22.39L23.39 21L20.31 17.9ZM16.5 18C16.0055 18 15.5222 17.8534 15.1111 17.5787C14.7 17.304 14.3795 16.9135 14.1903 16.4567C14.0011 15.9999 13.9516 15.4972 14.048 15.0123C14.1445 14.5273 14.3826 14.0819 14.7322 13.7322C15.0819 13.3826 15.5273 13.1445 16.0123 13.048C16.4972 12.9516 16.9999 13.0011 17.4567 13.1903C17.9135 13.3795 18.304 13.7 18.5787 14.1111C18.8534 14.5222 19 15.0055 19 15.5C19 16.163 18.7366 16.7989 18.2678 17.2678C17.7989 17.7366 17.163 18 16.5 18Z" />
    </Svg>
  );
};
