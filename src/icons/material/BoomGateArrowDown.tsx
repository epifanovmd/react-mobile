import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BoomGateArrowDownIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19.86 3.00005C19.31 2.04005 18.09 1.71005 17.12 2.27005L6.92 8.16005C6.62 8.06005 6.31 8.00005 6 8.00005C5.20435 8.00005 4.44129 8.31612 3.87868 8.87873C3.31607 9.44134 3 10.2044 3 11.0001V20.0001C2.73478 20.0001 2.48043 20.1054 2.29289 20.2929C2.10536 20.4805 2 20.7348 2 21.0001V22.0001H10V21.0001C10 20.7348 9.89464 20.4805 9.70711 20.2929C9.51957 20.1054 9.26522 20.0001 9 20.0001V11.5801L19.12 5.73005C20.08 5.18005 20.41 3.96005 19.86 3.00005ZM6 12.5001C5.60218 12.5001 5.22064 12.342 4.93934 12.0607C4.65804 11.7794 4.5 11.3979 4.5 11.0001C4.5 10.6022 4.65804 10.2207 4.93934 9.93939C5.22064 9.65809 5.60218 9.50005 6 9.50005C6.39782 9.50005 6.77936 9.65809 7.06066 9.93939C7.34196 10.2207 7.5 10.6022 7.5 11.0001C7.5 11.3979 7.34196 11.7794 7.06066 12.0607C6.77936 12.342 6.39782 12.5001 6 12.5001ZM10.4 9.62005L8.1 8.62005L9.4 7.87005L11.7 8.87005L10.4 9.62005ZM13.86 7.62005L11.56 6.62005L12.86 5.87005L15.16 6.87005L13.86 7.62005ZM17.33 5.62005L15.03 4.62005L16.33 3.87005L18.62 4.87005L17.33 5.62005ZM17 20.0001L12 15.0001H15V11.0001H19V15.0001H22L17 20.0001Z" />
    </Svg>
  );
};
