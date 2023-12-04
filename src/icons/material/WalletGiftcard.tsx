import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WalletGiftcardIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 14H4V8H9.08L7 10.83L8.62 12L11 8.76L12 7.4L13 8.76L15.38 12L17 10.83L14.92 8H20V14ZM20 19H4V17H20V19ZM9 4C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5C10 5.26522 9.89464 5.51957 9.70711 5.70711C9.51957 5.89464 9.26522 6 9 6C8.73478 6 8.48043 5.89464 8.29289 5.70711C8.10536 5.51957 8 5.26522 8 5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4ZM15 4C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5C16 5.26522 15.8946 5.51957 15.7071 5.70711C15.5196 5.89464 15.2652 6 15 6C14.7348 6 14.4804 5.89464 14.2929 5.70711C14.1054 5.51957 14 5.26522 14 5C14 4.73478 14.1054 4.48043 14.2929 4.29289C14.4804 4.10536 14.7348 4 15 4ZM20 6H17.82C17.93 5.69 18 5.35 18 5C18 4.20435 17.6839 3.44129 17.1213 2.87868C16.5587 2.31607 15.7956 2 15 2C13.95 2 13.04 2.54 12.5 3.35L12 4L11.5 3.34C10.96 2.54 10.05 2 9 2C8.20435 2 7.44129 2.31607 6.87868 2.87868C6.31607 3.44129 6 4.20435 6 5C6 5.35 6.07 5.69 6.18 6H4C2.89 6 2 6.89 2 8V19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6Z" />
    </Svg>
  );
};
