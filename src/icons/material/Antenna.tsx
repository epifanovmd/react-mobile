import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AntennaIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 7.50003C12.69 7.50003 13.27 7.73003 13.76 8.20003C14.25 8.67003 14.5 9.27003 14.5 10C14.5 11.05 14 11.81 13 12.28V21H11V12.28C10 11.81 9.5 11.05 9.5 10C9.5 9.27003 9.76 8.67003 10.24 8.20003C10.72 7.73003 11.31 7.50003 12 7.50003ZM16.69 5.30003C17.94 6.55003 18.61 8.11003 18.7 10C18.7 11.8 18.03 13.38 16.69 14.72L15.5 13.5C16.5 12.59 17 11.42 17 10C17 8.67003 16.5 7.50003 15.5 6.50003L16.69 5.30003ZM6.09 4.08003C4.5 5.67003 3.7 7.64003 3.7 10C3.7 12.36 4.5 14.3 6.09 15.89L4.92 17.11C3 15.08 2 12.7 2 10C2 7.30003 3 4.94003 4.92 2.91003L6.09 4.08003ZM19.08 2.91003C21 4.94003 22 7.30003 22 10C22 12.8 21 15.17 19.08 17.11L17.91 15.89C19.5 14.3 20.3 12.33 20.3 10C20.3 7.67003 19.5 5.67003 17.91 4.08003L19.08 2.91003ZM7.31 5.30003L8.5 6.50003C7.5 7.42003 7 8.58003 7 10C7 11.33 7.5 12.5 8.5 13.5L7.31 14.72C5.97 13.38 5.3 11.8 5.3 10C5.3 8.20003 5.97 6.64003 7.31 5.30003Z" />
    </Svg>
  );
};
