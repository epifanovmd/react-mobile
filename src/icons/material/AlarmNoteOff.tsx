import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlarmNoteOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.0001 13V15.8L20.0001 16.8V15H23.0001V13H19.0001ZM2.38011 1.72998L1.11011 2.99998L3.00011 4.87998L2.00011 5.70998L3.29011 7.23998L4.41011 6.29998L5.21011 7.09998C1.95011 10.85 2.35011 16.54 6.11011 19.8C7.74011 21.22 9.83011 22 12.0001 22C12.3301 22 12.6701 22 13.0001 21.94V19.94C12.6701 20 12.3301 20 12.0001 20C10.1436 20 8.36311 19.2625 7.05036 17.9497C5.73761 16.637 5.00011 14.8565 5.00011 13C5.00011 11.36 5.57011 9.76998 6.63011 8.49998L11.4101 13.3L7.50011 15.62L8.25011 16.85L12.4401 14.33L16.3801 18.27C15.1401 18.88 14.6401 20.38 15.2501 21.62C15.8601 22.86 17.3601 23.36 18.6001 22.75C19.0901 22.5 19.5001 22.11 19.7301 21.62L20.8401 22.73L22.1101 21.46L2.38011 1.72998ZM12.0001 5.99998C15.1001 5.99998 17.8301 8.02998 18.7101 11H20.7801C19.8501 6.89998 16.2001 3.99998 12.0001 3.99998C10.6501 3.99998 9.31011 4.29998 8.10011 4.89998L9.62011 6.41998C10.3801 6.13998 11.1901 5.99998 12.0001 5.99998ZM11.5001 8.29998L13.0001 9.79998V7.99998H11.5001V8.29998ZM7.88011 3.38998L6.60011 1.85998L5.76011 2.55998L7.18011 3.99998L7.88011 3.38998ZM17.4001 1.85998L16.1101 3.38998L20.7101 7.24998L22.0001 5.71998L17.4001 1.85998Z" />
    </Svg>
  );
};
