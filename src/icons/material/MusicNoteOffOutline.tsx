import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MusicNoteOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 6.99938H18V2.99938H12V7.60938L14 9.60938V6.99938ZM12 10.4394L4.41 2.85938L3 4.26938L12 13.2694V13.5494C11.5024 13.255 10.9461 13.0737 10.3706 13.0184C9.79515 12.9631 9.21454 13.0351 8.67 13.2294C7.72577 13.5611 6.94021 14.2348 6.46838 15.1174C5.99655 16.0001 5.87273 17.0275 6.12138 17.9969C6.37002 18.9664 6.97304 19.8074 7.81143 20.354C8.64982 20.9006 9.66265 21.113 10.65 20.9494C11.6029 20.7722 12.4623 20.2632 13.0755 19.5126C13.6888 18.762 14.0163 17.8185 14 16.8494V15.2694L19.73 20.9994L21.14 19.5894L12 10.4394ZM10 18.9994C9.60444 18.9994 9.21776 18.8821 8.88886 18.6623C8.55996 18.4426 8.30362 18.1302 8.15224 17.7647C8.00087 17.3993 7.96126 16.9972 8.03843 16.6092C8.1156 16.2212 8.30608 15.8649 8.58579 15.5852C8.86549 15.3055 9.22186 15.115 9.60982 15.0378C9.99778 14.9606 10.3999 15.0002 10.7654 15.1516C11.1308 15.303 11.4432 15.5593 11.6629 15.8882C11.8827 16.2171 12 16.6038 12 16.9994C12 17.5298 11.7893 18.0385 11.4142 18.4136C11.0391 18.7887 10.5304 18.9994 10 18.9994Z" />
    </Svg>
  );
};
