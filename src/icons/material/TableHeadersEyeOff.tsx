import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TableHeadersEyeOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2.38 1.73047L1.11 3.00047L2.26 4.15047C1.88945 4.29804 1.57149 4.55304 1.34696 4.8827C1.12244 5.21236 1.00161 5.60162 1 6.00047V19.0005C1 19.5309 1.21071 20.0396 1.58579 20.4147C1.96086 20.7898 2.46957 21.0005 3 21.0005H9V11.0005H9.11L12.72 14.6105C11.9634 15.2577 11.3734 16.0774 11 17.0005C11.488 18.189 12.3198 19.2046 13.3888 19.9173C14.4578 20.6299 15.7153 21.0071 17 21.0005C17.6231 20.9984 18.2426 20.9075 18.84 20.7305L20.84 22.7305L22.11 21.4605L20.58 19.9305L2.38 1.73047ZM7 19.0005H3V16.0005H7V19.0005ZM7 14.0005H3V11.0005H7V14.0005ZM7 9.00047H3V6.00047H4.11L7 8.89047V9.00047ZM17 19.5005C16.6249 19.5007 16.2545 19.4164 15.9163 19.254C15.5782 19.0916 15.2809 18.8551 15.0466 18.5622C14.8122 18.2693 14.6468 17.9274 14.5626 17.5618C14.4784 17.1962 14.4775 16.8164 14.56 16.4505L17.56 19.4505C17.3758 19.4881 17.188 19.5049 17 19.5005ZM16.24 13.0005L17.85 14.6105C18.1947 14.7352 18.5078 14.9343 18.767 15.1935C19.0262 15.4527 19.2252 15.7658 19.35 16.1105L21.94 18.7005C22.3799 18.1926 22.7375 17.619 23 17.0005C22.512 15.812 21.6802 14.7963 20.6112 14.0837C19.5422 13.371 18.2847 12.9938 17 13.0005H16.24ZM13 6.00047V9.00047H12.2L14.2 11.0005H21V6.00047C21 5.47004 20.7893 4.96133 20.4142 4.58626C20.0391 4.21118 19.5304 4.00047 19 4.00047H7.2L9.2 6.00047H13ZM15 6.00047H19V9.00047H15V6.00047Z" />
    </Svg>
  );
};
