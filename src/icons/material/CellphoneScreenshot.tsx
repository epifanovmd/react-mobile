import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CellphoneScreenshotIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7 1C6.46957 1 5.96086 1.21071 5.58579 1.58579C5.21071 1.96086 5 2.46957 5 3V21C5 21.5304 5.21071 22.0391 5.58579 22.4142C5.96086 22.7893 6.46957 23 7 23H17C17.5304 23 18.0391 22.7893 18.4142 22.4142C18.7893 22.0391 19 21.5304 19 21V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H7ZM7 4H17V20H7V4ZM9 6V10H10.5V7.5H13V6H9ZM13.5 14V16.5H11V18H15V14H13.5Z" />
    </Svg>
  );
};
