import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArchiveOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M8.20011 4.99998L6.20011 2.99998H21.0001V8.99998H12.2001L10.2001 6.99998H19.0001V4.99998H8.20011ZM20.0001 16.8V9.99998H18.0001V14.8L20.0001 16.8ZM20.0001 19.35V19.34L18.0001 17.34V17.35L9.66011 8.99998L7.66011 6.99998L6.13011 5.46998L2.39011 1.72998L1.11011 2.99998L3.00011 4.88998V8.99998H7.11011L17.1101 19H6.00011V9.99998H4.00011V21H19.1101L20.8401 22.73L22.1101 21.46L20.0001 19.35Z" />
    </Svg>
  );
};
