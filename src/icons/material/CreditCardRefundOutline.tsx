import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CreditCardRefundOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 11H6C5.46957 11 4.96086 11.2107 4.58579 11.5858C4.21071 11.9609 4 12.4696 4 13V21C4 21.5304 4.21071 22.0391 4.58579 22.4142C4.96086 22.7893 5.46957 23 6 23H18C18.5304 23 19.0391 22.7893 19.4142 22.4142C19.7893 22.0391 20 21.5304 20 21V13C20 12.4696 19.7893 11.9609 19.4142 11.5858C19.0391 11.2107 18.5304 11 18 11ZM18 21H6V17H18V21ZM18 15H6V13H18V15ZM17 5V10H15.5V6.5H9.88L12.3 8.93L11.24 10L7 5.75L11.24 1.5L12.3 2.57L9.88 5H17Z" />
    </Svg>
  );
};
