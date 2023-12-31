import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GitIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.60007 10.5903L8.38007 4.80031L10.0701 6.50031C9.83007 7.35031 10.2201 8.28031 11.0001 8.73031V14.2703C10.4001 14.6103 10.0001 15.2603 10.0001 16.0003C10.0001 16.5307 10.2108 17.0395 10.5859 17.4145C10.9609 17.7896 11.4696 18.0003 12.0001 18.0003C12.5305 18.0003 13.0392 17.7896 13.4143 17.4145C13.7894 17.0395 14.0001 16.5307 14.0001 16.0003C14.0001 15.2603 13.6001 14.6103 13.0001 14.2703V9.41031L15.0701 11.5003C15.0001 11.6503 15.0001 11.8203 15.0001 12.0003C15.0001 12.5307 15.2108 13.0395 15.5859 13.4145C15.9609 13.7896 16.4696 14.0003 17.0001 14.0003C17.5305 14.0003 18.0392 13.7896 18.4143 13.4145C18.7894 13.0395 19.0001 12.5307 19.0001 12.0003C19.0001 11.4699 18.7894 10.9612 18.4143 10.5861C18.0392 10.211 17.5305 10.0003 17.0001 10.0003C16.8201 10.0003 16.6501 10.0003 16.5001 10.0703L13.9301 7.50031C14.1901 6.57031 13.7101 5.55031 12.7801 5.16031C12.3501 5.00031 11.9001 4.96031 11.5001 5.07031L9.80007 3.38031L10.5901 2.60031C11.3701 1.81031 12.6301 1.81031 13.4101 2.60031L21.4001 10.5903C22.1901 11.3703 22.1901 12.6303 21.4001 13.4103L13.4101 21.4003C12.6301 22.1903 11.3701 22.1903 10.5901 21.4003L2.60007 13.4103C1.81007 12.6303 1.81007 11.3703 2.60007 10.5903Z" />
    </Svg>
  );
};
