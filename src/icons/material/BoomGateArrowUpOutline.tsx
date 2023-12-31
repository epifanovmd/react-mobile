import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BoomGateArrowUpOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.86 3.00005C20.41 3.96005 20.08 5.18005 19.12 5.73005L9 11.5801V20.0001C9.26522 20.0001 9.51957 20.1054 9.70711 20.2929C9.89464 20.4805 10 20.7348 10 21.0001V22.0001H2V21.0001C2 20.7348 2.10536 20.4805 2.29289 20.2929C2.48043 20.1054 2.73478 20.0001 3 20.0001V11.0001C3 10.2044 3.31607 9.44134 3.87868 8.87873C4.44129 8.31612 5.20435 8.00005 6 8.00005C6.31 8.00005 6.62 8.06005 6.92 8.16005L17.12 2.27005C18.09 1.71005 19.31 2.04005 19.86 3.00005ZM7.5 20.0001V13.6001C6.57 14.1401 5.43 14.1401 4.5 13.6001V20.0001H7.5ZM6 12.5001C6.39782 12.5001 6.77936 12.342 7.06066 12.0607C7.34196 11.7794 7.5 11.3979 7.5 11.0001C7.5 10.6022 7.34196 10.2207 7.06066 9.93939C6.77936 9.65809 6.39782 9.50005 6 9.50005C5.60218 9.50005 5.22064 9.65809 4.93934 9.93939C4.65804 10.2207 4.5 10.6022 4.5 11.0001C4.5 11.3979 4.65804 11.7794 4.93934 12.0607C5.22064 12.342 5.60218 12.5001 6 12.5001ZM10.4 9.62005L11.7 8.87005L9.4 7.87005L8.1 8.62005L10.4 9.62005ZM13.86 7.62005L15.16 6.87005L12.86 5.87005L11.56 6.62005L13.86 7.62005ZM17.33 5.62005L18.62 4.87005L16.33 3.87005L15.03 4.62005L17.33 5.62005ZM16 20.0001V15.0001H13L17 11.1601L21 15.0001H18V20.0001H16Z" />
    </Svg>
  );
};
