import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GondolaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.9999 10H12.9999V7.59L22.1199 6.07L21.8799 4.59L16.4099 5.5C16.4599 5.35 16.4999 5.18 16.4999 5C16.4999 4.60218 16.3418 4.22064 16.0605 3.93934C15.7792 3.65804 15.3977 3.5 14.9999 3.5C14.6021 3.5 14.2205 3.65804 13.9392 3.93934C13.6579 4.22064 13.4999 4.60218 13.4999 5C13.4999 5.35 13.6299 5.68 13.8399 5.93L12.9999 6.07V5H10.9999V6.41L10.4099 6.5C10.4599 6.35 10.4999 6.18 10.4999 6C10.4999 5.60218 10.3418 5.22064 10.0605 4.93934C9.77924 4.65804 9.39771 4.5 8.99988 4.5C8.60206 4.5 8.22053 4.65804 7.93922 4.93934C7.65792 5.22064 7.49988 5.60218 7.49988 6C7.49988 6.36 7.62988 6.68 7.82988 6.93L1.87988 7.93L2.11988 9.41L10.9999 7.93V10H5.99988C4.88988 10 3.99988 10.9 3.99988 12V18C3.99988 18.5304 4.2106 19.0391 4.58567 19.4142C4.96074 19.7893 5.46945 20 5.99988 20H17.9999C18.5303 20 19.039 19.7893 19.4141 19.4142C19.7892 19.0391 19.9999 18.5304 19.9999 18V12C19.9999 11.4696 19.7892 10.9609 19.4141 10.5858C19.039 10.2107 18.5303 10 17.9999 10ZM5.99988 12H8.24988V16H5.99988V12ZM9.74988 16V12H14.2499V16H9.74988ZM17.9999 16H15.7499V12H17.9999V16Z" />
    </Svg>
  );
};
