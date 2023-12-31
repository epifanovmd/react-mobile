import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BagPersonalOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.0001 19.35L2.38011 1.72998L1.11011 2.99998L4.77011 6.65998C4.27011 7.33998 4.00011 8.15998 4.00011 8.99998V20C4.00011 20.5304 4.21082 21.0391 4.58589 21.4142C4.96097 21.7893 5.46967 22 6.00011 22H18.0001C18.5601 22 19.0801 21.76 19.4601 21.35L20.8401 22.73L22.1101 21.46L20.0001 19.35ZM9.00011 16V18H8.00011V16H6.00011V15H13.1101L14.1101 16H9.00011ZM20.0001 8.99998C20.0001 7.93911 19.5787 6.9217 18.8285 6.17155C18.0784 5.42141 17.061 4.99998 16.0001 4.99998V3.99998C16.0001 3.46955 15.7894 2.96084 15.4143 2.58577C15.0392 2.21069 14.5305 1.99998 14.0001 1.99998H10.0001C9.46968 1.99998 8.96097 2.21069 8.58589 2.58577C8.21082 2.96084 8.00011 3.46955 8.00011 3.99998V4.79998L20.0001 16.8V8.99998ZM14.0001 4.99998H10.0001V3.99998H14.0001V4.99998Z" />
    </Svg>
  );
};
