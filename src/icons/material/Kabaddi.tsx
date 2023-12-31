import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const KabaddiIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11.2001 10.6008C12.2001 11.6008 13.4001 12.1008 14.8001 12.1008L14.9001 14.2008C13.0001 14.2008 11.3001 13.5008 9.8001 12.1008L9.1001 11.4008L6.8001 13.8008L9.0001 15.9008V21.9008H7.0001V16.7008L5.7001 15.5008V17.7008L1.5001 22.0008L0.100098 20.6008L3.7001 17.0008L2.5001 13.5008C2.3001 12.9008 2.6001 12.4008 3.1001 12.0008L6.4001 8.70078C6.8001 8.20078 7.3001 8.00078 7.8001 8.00078C8.3001 8.00078 8.6001 8.10078 8.9001 8.30078L11.2001 10.6008ZM24.0001 11.9008H22.0001V8.50078L20.2001 7.80078L21.1001 12.2008L22.1001 17.4008L23.0001 21.8008H20.9001L19.1001 13.8008L17.0001 15.8008V21.8008H15.0001V14.3008L17.1001 12.3008L16.5001 9.30078C15.9001 9.90078 15.2001 10.5008 14.4001 10.9008C13.5001 10.8008 12.6001 10.4008 11.9001 9.70078C13.5001 9.40078 14.6001 8.60078 15.3001 7.40078L16.3001 5.80078C16.9001 4.80078 17.8001 4.50078 18.9001 5.00078L24.0001 7.20078V11.9008ZM11.4001 4.40078C12.5001 4.40078 13.4001 5.30078 13.4001 6.40078C13.4001 7.50078 12.5001 8.40078 11.4001 8.40078C10.3001 8.40078 9.4001 7.50078 9.4001 6.40078C9.4001 5.30078 10.3001 4.40078 11.4001 4.40078ZM16.5001 0.300781C17.6001 0.300781 18.5001 1.20078 18.5001 2.30078C18.5001 3.40078 17.6001 4.30078 16.5001 4.30078C15.4001 4.30078 14.5001 3.40078 14.5001 2.30078C14.5001 1.20078 15.4001 0.300781 16.5001 0.300781Z" />
    </Svg>
  );
};
