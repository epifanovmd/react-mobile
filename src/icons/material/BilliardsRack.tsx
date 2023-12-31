import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BilliardsRackIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.31 16.4402L14.54 6.47019C13.72 5.04019 11.89 4.55019 10.46 5.38019C10 5.64019 9.63003 6.00019 9.36003 6.47019L3.60003 16.4402C2.77003 17.8702 3.26004 19.6902 4.69003 20.5002C5.14003 20.7802 5.65003 20.9202 6.18003 20.9202H17.73C19.38 20.9102 20.72 19.5702 20.71 17.9202C20.71 17.4002 20.57 16.8902 20.31 16.4402ZM5.37003 17.4302L11.11 7.47019C11.38 7.00019 12 6.82019 12.46 7.10019C12.62 7.18019 12.75 7.31019 12.84 7.47019L18.58 17.4302C18.85 17.9102 18.69 18.5002 18.21 18.7902C18.06 18.8802 17.89 18.9302 17.72 18.9302H6.21004C5.66004 18.9202 5.21003 18.4702 5.22003 17.9202C5.22003 17.7502 5.26004 17.5802 5.35003 17.4302H5.37003ZM11.97 13.4502C10.87 13.4502 10 12.5602 10 11.4602C10 10.3502 10.87 9.46019 11.97 9.46019C12.5005 9.46019 13.0092 9.6709 13.3842 10.046C13.7593 10.421 13.97 10.9298 13.97 11.4602C13.97 12.5602 13.07 13.4502 11.95 13.4502H11.97ZM9.46003 17.9302C8.36003 17.9302 7.47003 17.0402 7.47003 15.9402C7.47003 14.8402 8.36003 13.9502 9.46003 13.9502C10.56 13.9502 11.46 14.8402 11.46 15.9402C11.46 17.0402 10.56 17.9302 9.46003 17.9302ZM14.44 17.9302C13.9131 17.9276 13.4084 17.7171 13.0358 17.3444C12.6632 16.9718 12.4527 16.4672 12.45 15.9402C12.4527 15.4132 12.6632 14.9086 13.0358 14.5359C13.4084 14.1633 13.9131 13.9528 14.44 13.9502C15.54 13.9502 16.44 14.8402 16.44 15.9402C16.44 17.0402 15.54 17.9302 14.44 17.9302Z" />
    </Svg>
  );
};
