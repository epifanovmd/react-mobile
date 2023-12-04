import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FolderKeyNetworkOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9 8C7.3 8 6 9.3 6 11C6 12.7 7.3 14 9 14C10.3 14 11.4 13.2 11.8 12H14V14H16V12H18V10H11.8C11.4 8.8 10.3 8 9 8ZM9 12C8.4 12 8 11.6 8 11C8 10.4 8.4 10 9 10C9.6 10 10 10.4 10 11C10 11.6 9.6 12 9 12ZM15 20C15 19.5 14.6 19 14 19H13V17H19C20.1 17 21 16.1 21 15V7C21 5.9 20.1 5 19 5H13L11 3H5C3.9 3 3 3.9 3 5V15C3 16.1 3.9 17 5 17H11V19H10C9.4 19 9 19.5 9 20H2V22H9C9 22.5 9.4 23 10 23H14C14.6 23 15 22.5 15 22H22V20H15ZM5 15V7H19V15H5Z" />
    </Svg>
  );
};
