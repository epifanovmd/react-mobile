import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BriefcaseOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 7.99998V16.8L22 18.8V7.99998C22 7.44998 21.8 6.99998 21.42 6.58998C21.05 6.19998 20.58 5.99998 20 5.99998H16V3.99998C16 3.41998 15.8 2.94998 15.42 2.57998C15.05 2.19998 14.58 1.99998 14 1.99998H9.99999C9.41999 1.99998 8.94999 2.19998 8.57999 2.57998C8.19999 2.94998 7.99999 3.41998 7.99999 3.99998V4.79998L11.2 7.99998H20ZM9.99999 3.99998H14V5.99998H9.99999V3.99998ZM2.38999 1.72998L1.10999 2.99998L4.10999 5.99998H3.99999C3.41999 5.99998 2.94999 6.19998 2.57999 6.58998C2.19999 6.99998 1.99999 7.44998 1.99999 7.99998V19C1.99999 19.55 2.19999 20 2.57999 20.41C2.94999 20.8 3.41999 21 3.99999 21H19.11L20.84 22.73L22.11 21.46L2.38999 1.72998ZM3.99999 19V7.99998H6.10999L17.11 19H3.99999Z" />
    </Svg>
  );
};
