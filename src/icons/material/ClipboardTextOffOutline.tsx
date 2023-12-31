import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ClipboardTextOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.0001 7.00005V5.00005H19.0001V15.8001L21.0001 17.8001V5.00005C21.0001 3.90005 20.1101 3.00005 19.0001 3.00005H14.8201C14.2501 1.44005 12.5301 0.640055 11.0001 1.20005C10.1401 1.50005 9.50011 2.16005 9.18011 3.00005H6.20011L10.2001 7.00005H17.0001ZM12.0001 3.00005C12.5501 3.00005 13.0001 3.45005 13.0001 4.00005C13.0001 4.55005 12.5501 5.00005 12.0001 5.00005C11.4501 5.00005 11.0001 4.55005 11.0001 4.00005C11.0001 3.45005 11.4501 3.00005 12.0001 3.00005ZM14.2001 11.0001L12.2001 9.00005H17.0001V11.0001H14.2001ZM2.39011 1.73005L1.11011 3.00005L3.00011 4.90005C3.00011 4.93005 3.00011 4.97005 3.00011 5.00005V19.0001C3.00011 20.1101 3.90011 21.0001 5.00011 21.0001H19.0001C19.0301 21.0001 19.0701 21.0001 19.1001 21.0001L20.8401 22.7301L22.1101 21.4601L2.39011 1.73005ZM5.00011 19.0001V6.89005L7.11011 9.00005H7.00011V11.0001H9.11011L11.1101 13.0001H7.00011V15.0001H13.1101L17.1101 19.0001H5.00011Z" />
    </Svg>
  );
};
