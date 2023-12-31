import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TableEyeOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 8.80047L6.19999 3.00047H18C19.1 3.00047 20 3.90047 20 5.00047V12.5905C19.07 12.2105 18.06 12.0005 17 12.0005C16.45 12.0005 15.91 12.0705 15.38 12.1805L14.2 11.0005H18V7.00047H12V8.80047ZM17.09 13.8905L22.31 19.1105C22.58 18.7305 22.82 18.3205 23 17.8805C22.07 15.5705 19.78 13.9205 17.09 13.8905ZM22.11 21.4605L20.84 22.7305L19.5 21.3705C18.71 21.6905 17.88 21.8805 17 21.8805C14.27 21.8805 11.94 20.2205 11 17.8805C11.45 16.7605 12.23 15.8005 13.21 15.1005L11.93 13.8205C11.19 14.4205 10.53 15.1405 9.99999 15.9705V13.0005H3.99999V17.0005H9.41999C9.25999 17.3205 9.11999 17.6605 8.99999 18.0005C9.11999 18.3405 9.25999 18.6805 9.41999 19.0005H3.99999C2.89999 19.0005 1.99999 18.1005 1.99999 17.0005V5.00047C1.99999 4.68047 2.07999 4.38047 2.21999 4.11047L1.10999 3.00047L2.38999 1.73047L22.11 21.4605ZM9.10998 11.0005L5.10999 7.00047H3.99999V11.0005H9.10998ZM18.18 20.0705L14.81 16.7005C14.61 17.0505 14.5 17.4505 14.5 17.8805C14.5 19.2605 15.62 20.3805 17 20.3805C17.43 20.3805 17.83 20.2705 18.18 20.0705Z" />
    </Svg>
  );
};
