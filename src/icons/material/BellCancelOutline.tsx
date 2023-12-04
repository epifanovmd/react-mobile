import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BellCancelOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.5 13C16.3065 13 15.1619 13.4741 14.318 14.318C13.4741 15.1619 13 16.3065 13 17.5C13 18.6935 13.4741 19.8381 14.318 20.682C15.1619 21.5259 16.3065 22 17.5 22C18.6935 22 19.8381 21.5259 20.682 20.682C21.5259 19.8381 22 18.6935 22 17.5C22 16.3065 21.5259 15.1619 20.682 14.318C19.8381 13.4741 18.6935 13 17.5 13ZM17.5 14.5C18.2956 14.5 19.0587 14.8161 19.6213 15.3787C20.1839 15.9413 20.5 16.7044 20.5 17.5C20.4945 18.0283 20.3496 18.5457 20.08 19L16 14.92C16.4543 14.6504 16.9717 14.5055 17.5 14.5ZM14.92 16L19 20.08C18.5457 20.3496 18.0283 20.4945 17.5 20.5C16.7044 20.5 15.9413 20.1839 15.3787 19.6213C14.8161 19.0587 14.5 18.2956 14.5 17.5C14.5055 16.9717 14.6504 16.4543 14.92 16ZM12 2C10.9 2 10 2.9 10 4C10 4.1 10 4.19 10 4.29C7.12 5.14 5 7.82 5 11V17L3 19V20H11.5C11.2383 19.3625 11.0797 18.6874 11.03 18H7V11C7 9.67392 7.52678 8.40215 8.46447 7.46447C9.40215 6.52678 10.6739 6 12 6C13.3261 6 14.5979 6.52678 15.5355 7.46447C16.4732 8.40215 17 9.67392 17 11C17.1666 10.9936 17.3334 10.9936 17.5 11C18.0053 11.0015 18.5087 11.0619 19 11.18V11C19 7.82 16.88 5.14 14 4.29C14 4.19 14 4.1 14 4C14 2.9 13.11 2 12 2ZM10 21C10 22.11 10.9 23 12 23C12.5 23 12.97 22.81 13.33 22.5C12.8224 22.0695 12.384 21.5636 12.03 21H10Z" />
    </Svg>
  );
};
