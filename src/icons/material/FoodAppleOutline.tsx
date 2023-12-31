import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FoodAppleOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 9.99956C18.58 7.56956 15.5 6.68956 13 7.99956V2.99956H11V7.99956C8.50002 6.68956 5.42002 7.56956 4.00002 9.99956C2.00002 12.9996 7.00002 21.9996 9.00002 21.9996C11 21.9996 11 20.9996 12 20.9996C13 20.9996 13 21.9996 15 21.9996C17 21.9996 22 12.9996 20 9.99956ZM18.25 13.3796C17.63 15.8496 16.41 18.1196 14.7 19.9996C14.5 19.9996 14.27 19.8996 14.1 19.7496C12.87 18.7596 11.13 18.7596 9.90002 19.7496C9.73002 19.8996 9.50002 19.9996 9.30002 19.9996C7.59002 18.1296 6.36002 15.8496 5.75002 13.3896C5.50002 12.6596 5.45002 11.8696 5.66002 11.1196C6.24002 10.0896 7.32002 9.42956 8.50002 9.39956C9.06002 9.40956 9.61002 9.53956 10.11 9.78956L11 10.2396H13L13.89 9.78956C14.39 9.53956 14.94 9.40956 15.5 9.39956C16.68 9.42956 17.76 10.0796 18.34 11.1096C18.55 11.8596 18.5 12.6496 18.25 13.3796ZM11 4.99956C5.38002 8.06956 4.11002 3.77956 4.11002 3.77956C4.11002 3.77956 6.77002 0.189562 11 4.99956Z" />
    </Svg>
  );
};
