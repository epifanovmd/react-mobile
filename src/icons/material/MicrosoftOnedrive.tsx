import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MicrosoftOnedriveIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.21 10.2898C18.7367 10.3232 19.2333 10.4532 19.7 10.6798C20.16 10.8932 20.56 11.1898 20.9 11.5698C21.24 11.9365 21.51 12.3565 21.71 12.8298C21.9033 13.3032 22 13.8065 22 14.3398C22 14.8998 21.8933 15.4265 21.68 15.9198C21.4667 16.4132 21.1733 16.8432 20.8 17.2098C20.4333 17.5765 20 17.8665 19.5 18.0798C19.02 18.2998 18.5 18.4098 17.94 18.4098H7C6.31333 18.4098 5.66667 18.2732 5.06 17.9998C4.45333 17.7398 3.92333 17.3865 3.47 16.9398C3.01667 16.4865 2.66 15.9565 2.4 15.3498C2.13333 14.7432 2 14.0965 2 13.4098C2 12.8632 2.08667 12.3365 2.26 11.8298C2.42 11.3298 2.66667 10.8698 3 10.4498C3.29333 10.0298 3.65333 9.66318 4.08 9.34984C4.50667 9.03651 4.98 8.79651 5.5 8.62984C5.74667 8.54318 5.98333 8.49984 6.21 8.49984C6.44333 8.45318 6.68333 8.42318 6.93 8.40984H6.94C7.22667 7.96984 7.56333 7.57651 7.95 7.22984C8.31667 6.88318 8.73333 6.58651 9.2 6.33984C9.64667 6.11318 10.12 5.92651 10.62 5.77984C11.12 5.65318 11.6333 5.58984 12.16 5.58984C12.8667 5.58984 13.5467 5.70651 14.2 5.93984C14.8533 6.17318 15.4533 6.49651 16 6.90984C16.5333 7.32318 16.99 7.81651 17.37 8.38984C17.7567 8.96984 18.0367 9.60318 18.21 10.2898ZM12.16 6.83984C11.42 6.83984 10.72 6.99318 10.06 7.29984C9.39333 7.59984 8.82667 8.03318 8.36 8.59984C8.60667 8.66651 8.84333 8.74984 9.07 8.84984C9.29 8.94984 9.51 9.06651 9.73 9.19984L13.71 11.5798L16 10.6198C16.14 10.5598 16.2867 10.5032 16.44 10.4498C16.5933 10.4032 16.7533 10.3632 16.92 10.3298C16.76 9.80984 16.5233 9.33651 16.21 8.90984C15.8967 8.48318 15.53 8.11651 15.11 7.80984C14.7033 7.50318 14.2433 7.26651 13.73 7.09984C13.2433 6.92651 12.72 6.83984 12.16 6.83984ZM4 15.6598L12.27 12.1798L9.08 10.2598C8.75333 10.0665 8.41333 9.91651 8.06 9.80984C7.68667 9.70984 7.31667 9.65984 6.95 9.65984C6.44333 9.65984 5.96 9.75984 5.5 9.95984C5.06 10.1598 4.67333 10.4298 4.34 10.7698C4.00667 11.1165 3.74 11.5165 3.54 11.9698C3.34667 12.4232 3.25 12.9032 3.25 13.4098C3.25 13.8032 3.31667 14.1965 3.45 14.5898C3.57667 14.9898 3.76 15.3465 4 15.6598ZM17.94 17.1598C18.2533 17.1598 18.5533 17.1065 18.84 16.9998C19.1267 16.9065 19.3933 16.7665 19.64 16.5798L13.61 12.9998L5.03 16.5898C5.32333 16.7698 5.63667 16.9065 5.97 16.9998C6.30333 17.1065 6.64667 17.1598 7 17.1598H17.94ZM20.45 15.6098C20.65 15.2032 20.75 14.7798 20.75 14.3398C20.75 13.9132 20.6667 13.5232 20.5 13.1698C20.34 12.8232 20.1233 12.5265 19.85 12.2798C19.57 12.0332 19.2467 11.8432 18.88 11.7098C18.5067 11.5698 18.1133 11.4998 17.7 11.4998C17.4667 11.4998 17.2333 11.5332 17 11.5998C16.7733 11.6532 16.55 11.7232 16.33 11.8098C16.11 11.8898 15.89 11.9798 15.67 12.0798C15.4567 12.1798 15.2467 12.2765 15.04 12.3698L20.45 15.6098Z" />
    </Svg>
  );
};
