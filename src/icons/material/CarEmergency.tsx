import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarEmergencyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M11 0V3H13V0H11ZM7.88 1.46L6.46 2.87L8.59 5L10 3.58L7.88 1.46ZM16.12 1.46L14 3.58L15.41 5L17.54 2.88L16.12 1.46ZM12 5C11.4696 5 10.9609 5.21071 10.5858 5.58579C10.2107 5.96086 10 6.46957 10 7V8H6.5C5.84 8 5.28 8.42 5.08 9L3 15V23C3 23.2652 3.10536 23.5196 3.29289 23.7071C3.48043 23.8946 3.73478 24 4 24H5C5.26522 24 5.51957 23.8946 5.70711 23.7071C5.89464 23.5196 6 23.2652 6 23V22H18V23C18 23.2652 18.1054 23.5196 18.2929 23.7071C18.4804 23.8946 18.7348 24 19 24H20C20.2652 24 20.5196 23.8946 20.7071 23.7071C20.8946 23.5196 21 23.2652 21 23V15L18.92 9C18.72 8.42 18.16 8 17.5 8H14V7C14 6.46957 13.7893 5.96086 13.4142 5.58579C13.0391 5.21071 12.5304 5 12 5ZM6.5 9.5H17.5L19 14H5L6.5 9.5ZM6.5 16C6.89782 16 7.27936 16.158 7.56066 16.4393C7.84196 16.7206 8 17.1022 8 17.5C8 17.8978 7.84196 18.2794 7.56066 18.5607C7.27936 18.842 6.89782 19 6.5 19C6.10218 19 5.72064 18.842 5.43934 18.5607C5.15804 18.2794 5 17.8978 5 17.5C5 17.1022 5.15804 16.7206 5.43934 16.4393C5.72064 16.158 6.10218 16 6.5 16ZM17.5 16C17.8978 16 18.2794 16.158 18.5607 16.4393C18.842 16.7206 19 17.1022 19 17.5C19 17.8978 18.842 18.2794 18.5607 18.5607C18.2794 18.842 17.8978 19 17.5 19C17.1022 19 16.7206 18.842 16.4393 18.5607C16.158 18.2794 16 17.8978 16 17.5C16 17.1022 16.158 16.7206 16.4393 16.4393C16.7206 16.158 17.1022 16 17.5 16Z" />
    </Svg>
  );
};
