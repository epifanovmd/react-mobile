import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CloudPrintIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 2C9.11 2 6.6 3.64 5.35 6.04C2.34 6.36 0 8.91 0 12C0 13.5913 0.632141 15.1174 1.75736 16.2426C2.88258 17.3679 4.4087 18 6 18V22H18V18H19C19.6566 18 20.3068 17.8707 20.9134 17.6194C21.52 17.3681 22.0712 16.9998 22.5355 16.5355C22.9998 16.0712 23.3681 15.52 23.6194 14.9134C23.8707 14.3068 24 13.6566 24 13C24 10.36 21.95 8.22 19.35 8.04C18.67 4.59 15.64 2 12 2ZM8 13H16V20H8V13ZM9 14V15H15V14H9ZM9 16V17H15V16H9ZM9 18V19H15V18H9Z" />
    </Svg>
  );
};
