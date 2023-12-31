import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PawOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M1.99991 4.26942L3.27991 2.99942L21.4999 21.2194L20.2299 22.4994L18.2299 20.4994C18.0899 20.5994 17.9399 20.6794 17.7899 20.7494C15.9999 21.5694 13.8799 19.8694 11.8899 19.8694C9.89991 19.8694 7.75991 21.6394 5.99991 20.7494C4.99991 20.2594 4.30991 18.9594 4.43991 17.8794C4.61991 16.3894 6.40991 15.5894 7.46991 14.4994C8.20991 13.7694 8.83991 12.6894 9.54991 11.8194L1.99991 4.26942ZM8.34991 2.99942C9.52991 2.82942 10.7799 4.11942 11.1399 5.89942C11.3199 6.74942 11.2599 7.55942 10.9999 8.18942L7.02991 4.19942C7.28991 3.54942 7.74991 3.09942 8.34991 2.99942ZM15.4999 2.99942C16.6899 3.18942 17.3499 4.76942 16.9999 6.53942C16.6199 8.31942 15.3699 9.60942 14.1899 9.42942C12.9999 9.24942 12.3499 7.66942 12.7199 5.89942C13.0799 4.11942 14.3299 2.82942 15.4999 2.99942ZM2.99991 7.59942C4.13991 7.10942 5.68991 7.99942 6.49991 9.54942C7.25991 11.1294 6.99991 12.7894 5.86991 13.2794C4.73991 13.7694 3.19991 12.8894 2.40991 11.3194C1.61991 9.74942 1.89991 8.07942 2.99991 7.59942ZM20.9999 7.59942C22.0999 8.07942 22.3799 9.74942 21.5899 11.3194C20.7999 12.8894 19.2599 13.7694 18.1299 13.2794C16.9999 12.7894 16.7399 11.1294 17.4999 9.54942C18.3099 7.99942 19.8599 7.10942 20.9999 7.59942Z" />
    </Svg>
  );
};
