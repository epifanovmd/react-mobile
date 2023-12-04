import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AirFilterIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 18.31V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V16.3C4.54 16.12 3.95 16 3 16C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15C2 14.7348 2.10536 14.4804 2.29289 14.2929C2.48043 14.1054 2.73478 14 3 14C3.82 14 4.47 14.08 5 14.21V12.3C4.54 12.12 3.95 12 3 12C2.73478 12 2.48043 11.8946 2.29289 11.7071C2.10536 11.5196 2 11.2652 2 11C2 10.7348 2.10536 10.4804 2.29289 10.2929C2.48043 10.1054 2.73478 10 3 10C3.82 10 4.47 10.08 5 10.21V8.3C4.54 8.12 3.95 8 3 8C2.73478 8 2.48043 7.89464 2.29289 7.70711C2.10536 7.51957 2 7.26522 2 7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6C3.82 6 4.47 6.08 5 6.21V4C5 3.46957 5.21071 2.96086 5.58579 2.58579C5.96086 2.21071 6.46957 2 7 2H17C17.5304 2 18.0391 2.21071 18.4142 2.58579C18.7893 2.96086 19 3.46957 19 4V6.16C20.78 6.47 21.54 7.13 21.71 7.29C22.1 7.68 22.1 8.32 21.71 8.71C21.32 9.1 20.8 9.09 20.29 8.71C20.29 8.71 19.25 8 17 8C15.74 8 14.91 8.41 13.95 8.9C12.91 9.41 11.74 10 10 10C9.64 10 9.31 10 9 9.96V7.95C9.3 8 9.63 8 10 8C11.26 8 12.09 7.59 13.05 7.11C14.09 6.59 15.27 6 17 6V4H7V20H17V18C18.5 18 18.97 18.29 19 18.31ZM17 10C15.27 10 14.09 10.59 13.05 11.11C12.09 11.59 11.26 12 10 12C9.63 12 9.3 12 9 11.95V13.96C9.31 14 9.64 14 10 14C11.74 14 12.91 13.41 13.95 12.9C14.91 12.42 15.74 12 17 12C19.25 12 20.29 12.71 20.29 12.71C20.8 13.1 21.32 13.1 21.71 12.71C22.1 12.32 22.1 11.69 21.71 11.29C21.5 11.08 20.25 10 17 10ZM17 14C15.27 14 14.09 14.59 13.05 15.11C12.09 15.59 11.26 16 10 16C9.63 16 9.3 16 9 15.95V17.96C9.31 18 9.64 18 10 18C11.74 18 12.91 17.41 13.95 16.9C14.91 16.42 15.74 16 17 16C19.25 16 20.29 16.71 20.29 16.71C20.8 17.1 21.32 17.1 21.71 16.71C22.1 16.32 22.1 15.69 21.71 15.29C21.5 15.08 20.25 14 17 14Z" />
    </Svg>
  );
};
