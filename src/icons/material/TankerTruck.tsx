import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TankerTruckIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 8H15V14H2V17H3C3 18.7 4.3 20 6 20C7.7 20 9 18.7 9 17H15C15 18.7 16.3 20 18 20C19.7 20 21 18.7 21 17H23V12L20 8ZM6 18.5C5.2 18.5 4.5 17.8 4.5 17C4.5 16.2 5.2 15.5 6 15.5C6.8 15.5 7.5 16.2 7.5 17C7.5 17.8 6.8 18.5 6 18.5ZM18 18.5C17.2 18.5 16.5 17.8 16.5 17C16.5 16.2 17.2 15.5 18 15.5C18.8 15.5 19.5 16.2 19.5 17C19.5 17.8 18.8 18.5 18 18.5ZM17 12V9.5H19.5L21.5 12H17ZM14 9.5C14 11.4 12.4 13 10.5 13H4.5C2.6 13 1 11.4 1 9.5C1 7.6 2.6 6 4.5 6H5V5H4V4H8V5H7V6H10.5C12.4 6 14 7.6 14 9.5Z" />
    </Svg>
  );
};
