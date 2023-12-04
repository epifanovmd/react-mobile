import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherPartlyRainyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.7501 4.47031C15.1001 5.50031 16.3501 8.03031 15.9201 10.4603C17.1901 11.5603 18.0001 13.1903 18.0001 15.0003V15.1703C18.3101 15.0603 18.6501 15.0003 19.0001 15.0003C19.7957 15.0003 20.5588 15.3164 21.1214 15.879C21.684 16.4416 22.0001 17.2047 22.0001 18.0003C22.0001 18.796 21.684 19.559 21.1214 20.1216C20.5588 20.6842 19.7957 21.0003 19.0001 21.0003H17.0001C17.0001 21.0003 16.0001 21.0003 16.0001 20.0003C16.0001 19.0003 17.0001 19.0003 17.0001 19.0003H19.0001C19.2653 19.0003 19.5196 18.895 19.7072 18.7074C19.8947 18.5199 20.0001 18.2655 20.0001 18.0003C20.0001 17.7351 19.8947 17.4807 19.7072 17.2932C19.5196 17.1057 19.2653 17.0003 19.0001 17.0003H16.0001V15.0003C16.0001 13.9394 15.5786 12.922 14.8285 12.1719C14.0783 11.4217 13.0609 11.0003 12.0001 11.0003C10.9392 11.0003 9.92178 11.4217 9.17163 12.1719C8.42149 12.922 8.00006 13.9394 8.00006 15.0003H6.00006C5.46963 15.0003 4.96092 15.211 4.58584 15.5861C4.21077 15.9612 4.00006 16.4699 4.00006 17.0003C4.00006 17.5307 4.21077 18.0395 4.58584 18.4145C4.96092 18.7896 5.46963 19.0003 6.00006 19.0003H7.00006C7.00006 19.0003 8.00006 19.0003 8.00006 20.0003C8.00006 21.0003 7.00006 21.0003 7.00006 21.0003H6.00006C4.93919 21.0003 3.92178 20.5789 3.17163 19.8287C2.42149 19.0786 2.00006 18.0612 2.00006 17.0003C2.00006 15.9394 2.42149 14.922 3.17163 14.1719C3.92178 13.4217 4.93919 13.0003 6.00006 13.0003H6.27006C5.00006 11.4503 4.60006 9.24031 5.50006 7.25031C6.72006 4.50031 9.97006 3.24031 12.7501 4.47031ZM11.9301 6.30031C10.1601 5.50031 8.09006 6.31031 7.31006 8.07031C6.85006 9.09031 6.93006 10.2203 7.41006 11.1303C8.50006 9.83031 10.1601 9.00031 12.0001 9.00031C12.7001 9.00031 13.3801 9.12031 14.0001 9.34031C13.9401 8.06031 13.1801 6.86031 11.9301 6.30031ZM13.5501 2.63031C13.0001 2.40031 12.4501 2.23031 11.8801 2.12031L14.3701 0.820312L15.2701 3.71031C14.7601 3.29031 14.1901 2.93031 13.5501 2.63031ZM6.09006 3.44031C5.60006 3.79031 5.17006 4.19031 4.80006 4.63031L4.91006 1.82031L7.87006 2.50031C7.25006 2.71031 6.65006 3.03031 6.09006 3.44031ZM18.0001 8.71031C17.9101 8.12031 17.7801 7.55031 17.5901 7.00031L19.9701 8.50031L17.9201 10.7303C18.0301 10.0803 18.0501 9.40031 18.0001 8.71031ZM3.04006 10.3003C3.11006 10.9003 3.25006 11.4703 3.43006 12.0003L1.06006 10.5003L3.10006 8.28031C3.00006 8.93031 2.97006 9.61031 3.04006 10.3003ZM12.0001 18.9103C12.5901 19.8203 13.0001 20.6303 13.0001 21.0003C13.0001 21.2655 12.8947 21.5199 12.7072 21.7074C12.5196 21.895 12.2653 22.0003 12.0001 22.0003C11.7348 22.0003 11.4805 21.895 11.293 21.7074C11.1054 21.5199 11.0001 21.2655 11.0001 21.0003C11.0001 20.6303 11.4101 19.8203 12.0001 18.9103ZM12.0001 15.6203C12.0001 15.6203 9.00006 19.0003 9.00006 21.0003C9.00006 21.796 9.31613 22.559 9.87874 23.1216C10.4413 23.6842 11.2044 24.0003 12.0001 24.0003C12.7957 24.0003 13.5588 23.6842 14.1214 23.1216C14.684 22.559 15.0001 21.796 15.0001 21.0003C15.0001 19.0003 12.0001 15.6203 12.0001 15.6203Z" />
    </Svg>
  );
};
