import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScaleBalanceIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.0001 3C10.7301 3 9.60005 3.8 9.18005 5H3.00005V7H4.95005L2.00005 14C1.53005 16 3.00005 17 5.50005 17C8.00005 17 9.56005 16 9.00005 14L6.05005 7H9.17005C9.50005 7.85 10.1501 8.5 11.0001 8.83V20H2.00005V22H22.0001V20H13.0001V8.82C13.8501 8.5 14.5001 7.85 14.8201 7H17.9501L15.0001 14C14.5301 16 16.0001 17 18.5001 17C21.0001 17 22.5601 16 22.0001 14L19.0501 7H21.0001V5H14.8301C14.4001 3.8 13.2701 3 12.0001 3ZM12.0001 5C12.2653 5 12.5196 5.10536 12.7072 5.29289C12.8947 5.48043 13.0001 5.73478 13.0001 6C13.0001 6.26522 12.8947 6.51957 12.7072 6.70711C12.5196 6.89464 12.2653 7 12.0001 7C11.7348 7 11.4805 6.89464 11.2929 6.70711C11.1054 6.51957 11.0001 6.26522 11.0001 6C11.0001 5.73478 11.1054 5.48043 11.2929 5.29289C11.4805 5.10536 11.7348 5 12.0001 5ZM5.50005 10.25L7.00005 14H4.00005L5.50005 10.25ZM18.5001 10.25L20.0001 14H17.0001L18.5001 10.25Z" />
    </Svg>
  );
};
