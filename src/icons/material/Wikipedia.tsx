import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WikipediaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14.97 18.9508L12.41 12.9208C11.39 14.9108 10.27 17.0008 9.31 18.9508C9.3 18.9608 8.84 18.9508 8.84 18.9508C7.37 15.5008 5.85 12.1008 4.37 8.68078C4.03 7.84078 2.83 6.50078 2 6.50078C2 6.40078 2 6.18078 2 6.05078H7.06V6.50078C6.46 6.50078 5.44 6.90078 5.7 7.55078C6.42 9.09078 8.94 15.0608 9.63 16.5808C10.1 15.6408 11.43 13.1608 12 12.1108C11.55 11.2308 10.13 7.93078 9.71 7.11078C9.39 6.57078 8.58 6.50078 7.96 6.50078C7.96 6.35078 7.97 6.25078 7.96 6.06078L12.42 6.07078V6.47078C11.81 6.50078 11.24 6.71078 11.5 7.29078C12.1 8.53078 12.45 9.42078 13 10.5708C13.17 10.2308 14.07 8.38078 14.5 7.41078C14.76 6.76078 14.37 6.50078 13.29 6.50078C13.3 6.38078 13.3 6.17078 13.3 6.07078C14.69 6.06078 16.78 6.06078 17.15 6.05078V6.47078C16.44 6.50078 15.71 6.88078 15.33 7.46078L13.5 11.3008C13.68 11.8108 15.46 15.7608 15.65 16.2008L19.5 7.37078C19.2 6.65078 18.34 6.50078 18 6.50078C18 6.37078 18 6.20078 18 6.05078L22 6.08078V6.10078V6.50078C21.12 6.50078 20.57 7.00078 20.25 7.75078C19.45 9.54078 17 15.2408 15.4 18.9508H14.97Z" />
    </Svg>
  );
};
