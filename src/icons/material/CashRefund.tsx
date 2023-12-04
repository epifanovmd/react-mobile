import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CashRefundIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.3 8.93L9.88 6.5H15.5V10H17V5H9.88L12.3 2.57L11.24 1.5L7 5.75L11.24 10L12.3 8.93ZM12 14C11.4067 14 10.8266 14.1759 10.3333 14.5056C9.83994 14.8352 9.45542 15.3038 9.22836 15.8519C9.0013 16.4001 8.94189 17.0033 9.05764 17.5853C9.1734 18.1672 9.45912 18.7018 9.87868 19.1213C10.2982 19.5409 10.8328 19.8266 11.4147 19.9424C11.9967 20.0581 12.5999 19.9987 13.1481 19.7716C13.6962 19.5446 14.1648 19.1601 14.4944 18.6667C14.8241 18.1734 15 17.5933 15 17C15 16.2044 14.6839 15.4413 14.1213 14.8787C13.5587 14.3161 12.7956 14 12 14ZM3 11V23H21V11H3ZM19 19C18.4696 19 17.9609 19.2107 17.5858 19.5858C17.2107 19.9609 17 20.4696 17 21H7C7 20.4696 6.78929 19.9609 6.41421 19.5858C6.03914 19.2107 5.53043 19 5 19V15C5.53043 15 6.03914 14.7893 6.41421 14.4142C6.78929 14.0391 7 13.5304 7 13H17C17 13.5304 17.2107 14.0391 17.5858 14.4142C17.9609 14.7893 18.4696 15 19 15V19Z" />
    </Svg>
  );
};
