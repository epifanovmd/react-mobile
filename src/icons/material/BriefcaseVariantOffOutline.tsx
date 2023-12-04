import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BriefcaseVariantOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M10.0001 6.79998L8.10011 4.89998L10.0001 2.99998H14.0001L16.0001 4.99998V6.99998H20.0001C21.1001 6.99998 22.0001 7.89998 22.0001 8.99998V14C22.0001 14.73 21.5901 15.37 21.0001 15.72V17.8L17.2001 14H20.0001V8.99998H12.2001L10.2001 6.99998H14.0001V4.99998H10.0001V6.79998ZM22.1101 21.46L20.8401 22.73L19.1001 21C19.0701 21 19.0301 21 19.0001 21H5.00011C3.89011 21 3.00011 20.11 3.00011 19V15.73C2.40011 15.38 2.00011 14.75 2.00011 14V8.99998C2.00011 7.89998 2.90011 6.99998 4.00011 6.99998H5.11011L1.11011 2.99998L2.39011 1.72998L22.1101 21.46ZM11.0001 15H13.0001V14.89L11.1101 13H11.0001V15ZM9.00011 14V11H9.11011L7.11011 8.99998H4.00011V14H9.00011ZM17.1101 19L15.0001 16.89V17H9.00011V16H5.00011V19H17.1101Z" />
    </Svg>
  );
};
