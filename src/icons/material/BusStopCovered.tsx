import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BusStopCoveredIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 3H7V2H6C5.69938 2.03317 5.41216 2.14238 5.16546 2.31735C4.91876 2.49231 4.72071 2.72726 4.59 3H2V5H3.73C2 10.58 2 22 2 22H7V5H20V3ZM22 8.5C21.9905 8.02923 21.8482 7.57073 21.5895 7.17728C21.3309 6.78382 20.9663 6.47141 20.5379 6.27602C20.1095 6.08063 19.6346 6.0102 19.168 6.07283C18.7013 6.13547 18.2618 6.32862 17.9001 6.63006C17.5383 6.9315 17.2691 7.32897 17.1233 7.7767C16.9776 8.22443 16.9612 8.70423 17.0761 9.16085C17.1911 9.61747 17.4326 10.0323 17.773 10.3577C18.1133 10.6831 18.5387 10.9057 19 11V22H20V11C20.5732 10.8831 21.0872 10.5689 21.4527 10.1121C21.8181 9.65535 22.0118 9.08487 22 8.5ZM15 11.5V16H14V22H12.5V17H11.5V22H10V16H9V11.5C9 11.1022 9.15804 10.7206 9.43934 10.4393C9.72064 10.158 10.1022 10 10.5 10H13.5C13.8978 10 14.2794 10.158 14.5607 10.4393C14.842 10.7206 15 11.1022 15 11.5ZM12 6.5C11.7033 6.5 11.4133 6.58797 11.1666 6.7528C10.92 6.91762 10.7277 7.15189 10.6142 7.42597C10.5006 7.70006 10.4709 8.00166 10.5288 8.29264C10.5867 8.58361 10.7296 8.85088 10.9393 9.06066C11.1491 9.27044 11.4164 9.4133 11.7074 9.47118C11.9983 9.52906 12.2999 9.49935 12.574 9.38582C12.8481 9.27229 13.0824 9.08003 13.2472 8.83335C13.412 8.58668 13.5 8.29667 13.5 8C13.5 7.60218 13.342 7.22064 13.0607 6.93934C12.7794 6.65804 12.3978 6.5 12 6.5Z" />
    </Svg>
  );
};
