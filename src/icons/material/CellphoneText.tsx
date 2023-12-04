import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CellphoneTextIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17 19V5H7V19H17ZM17 1C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V21C19 21.5304 18.7893 22.0391 18.4142 22.4142C18.0391 22.7893 17.5304 23 17 23H7C5.89 23 5 22.1 5 21V3C5 1.89 5.89 1 7 1H17ZM9 7H15V9H9V7ZM9 11H13V13H9V11Z" />
    </Svg>
  );
};
