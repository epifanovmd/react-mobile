import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PhoneHangupOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M23.71 11.6703C20.5504 8.66814 16.3585 6.99414 12 6.99414C7.64156 6.99414 3.44959 8.66814 0.290017 11.6703C0.197335 11.7638 0.12401 11.8746 0.0742455 11.9964C0.0244809 12.1183 -0.000744179 12.2487 1.67143e-05 12.3803C0.00112134 12.6427 0.105273 12.8941 0.290017 13.0803L2.77002 15.5603C2.86582 15.6555 2.97989 15.7302 3.10535 15.78C3.23081 15.8299 3.36506 15.8538 3.50002 15.8503C3.75402 15.8468 3.99714 15.7467 4.18002 15.5703C4.97493 14.8312 5.87049 14.2084 6.84002 13.7203C7.00832 13.6379 7.15006 13.5098 7.24908 13.3506C7.34809 13.1915 7.40039 13.0078 7.40002 12.8203V9.72035C8.88618 9.24094 10.4384 8.99798 12 9.00035C13.5593 8.9953 15.1092 9.2418 16.59 9.73035V12.8303C16.5896 13.0178 16.6419 13.2015 16.741 13.3606C16.84 13.5198 16.9817 13.6479 17.15 13.7303C18.1247 14.2148 19.024 14.838 19.82 15.5803C20.0029 15.7567 20.246 15.8568 20.5 15.8603C20.635 15.8638 20.7692 15.8399 20.8947 15.79C21.0201 15.7402 21.1342 15.6655 21.23 15.5703L23.71 13.0903C23.8037 12.9974 23.8781 12.8868 23.9289 12.7649C23.9797 12.6431 24.0058 12.5124 24.0058 12.3803C24.0058 12.2483 23.9797 12.1176 23.9289 11.9958C23.8781 11.8739 23.8037 11.7633 23.71 11.6703ZM5.40002 12.2203C4.74236 12.5946 4.11688 13.0227 3.53002 13.5003L2.46002 12.4203C3.36433 11.6713 4.35063 11.0272 5.40002 10.5003V12.2203ZM20.5 13.5003C19.903 13.025 19.2675 12.6002 18.6 12.2303V10.5303C19.6578 11.0398 20.6487 11.678 21.55 12.4303L20.5 13.5003Z" />
    </Svg>
  );
};
