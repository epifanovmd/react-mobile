import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BulldozerIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 4C3.73478 4 3.48043 4.10536 3.29289 4.29289C3.10536 4.48043 3 4.73478 3 5V10C2.54 10 2.14 10.31 2.03 10.76V13.97H2.29C2.65 13.37 3.3 13 4 13H13C13.7 13 14.35 13.37 14.71 13.97H16.03L16 11C16 10.7348 15.8946 10.4804 15.7071 10.2929C15.5196 10.1054 15.2652 10 15 10H13V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V10H9V5C9 4.73478 8.89464 4.48043 8.70711 4.29289C8.51957 4.10536 8.26522 4 8 4H4ZM5 6H7V10V11H5V6ZM17 11V19H22V18L19 17L18 11H17ZM4 15C3.46957 15 2.96086 15.2107 2.58579 15.5858C2.21071 15.9609 2 16.4696 2 17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17C15 16.4696 14.7893 15.9609 14.4142 15.5858C14.0391 15.2107 13.5304 15 13 15H4Z" />
    </Svg>
  );
};
