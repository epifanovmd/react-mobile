import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MusicRestSixteenthIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.0001 3C14.2157 3.93863 13.1436 4.59239 11.9501 4.86C12.025 4.5567 12.0034 4.23755 11.8883 3.94712C11.7731 3.65668 11.5701 3.40946 11.3077 3.23995C11.0452 3.07045 10.7364 2.98713 10.4243 3.00163C10.1122 3.01613 9.81242 3.12771 9.5668 3.32082C9.32119 3.51392 9.14201 3.7789 9.05426 4.07876C8.96652 4.37862 8.9746 4.69839 9.07738 4.99344C9.18015 5.28848 9.37249 5.54407 9.62754 5.72452C9.88259 5.90498 10.1876 6.00128 10.5001 6H10.7401C11.9901 5.99832 13.2116 5.62595 14.2501 4.93L12.9001 9.1C12.1271 9.98334 11.0945 10.5994 9.95006 10.86C10.025 10.5567 10.0034 10.2376 9.88828 9.94712C9.77312 9.65668 9.57014 9.40946 9.30768 9.23995C9.04523 9.07045 8.73639 8.98713 8.4243 9.00163C8.1122 9.01612 7.81242 9.12771 7.56681 9.32082C7.32119 9.51392 7.14201 9.7789 7.05426 10.0788C6.96652 10.3786 6.9746 10.6984 7.07738 10.9934C7.18015 11.2885 7.37249 11.5441 7.62754 11.7245C7.88259 11.905 8.18763 12.0013 8.50006 12H8.74006C9.99013 11.9983 11.2116 11.626 12.2501 10.93L9.00006 21H11.0001L17.0001 3H15.0001Z" />
    </Svg>
  );
};
