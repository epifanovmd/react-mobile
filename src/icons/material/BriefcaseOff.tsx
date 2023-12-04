import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BriefcaseOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.11 21.46L20.84 22.73L19.11 21H3.99999C2.88999 21 1.99999 20.1 1.99999 19V7.99998C1.99999 6.88998 2.88999 5.99998 3.99999 5.99998H4.10999L1.10999 2.99998L2.38999 1.72998L22.11 21.46ZM22 18.8L7.99999 4.79998V3.99998C7.99999 2.88998 8.88999 1.99998 9.99999 1.99998H14C15.11 1.99998 16 2.89998 16 3.99998V5.99998H20C21.11 5.99998 22 6.89998 22 7.99998V18.8ZM14 3.99998H9.99999V5.99998H14V3.99998Z" />
    </Svg>
  );
};
