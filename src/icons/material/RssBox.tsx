import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RssBoxIcon: FC<FlexSvgProps> = ({
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
      <Path d="M5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3ZM7.5 15C7.10218 15 6.72064 15.158 6.43934 15.4393C6.15804 15.7206 6 16.1022 6 16.5C6 16.8978 6.15804 17.2794 6.43934 17.5607C6.72064 17.842 7.10218 18 7.5 18C7.89782 18 8.27936 17.842 8.56066 17.5607C8.84196 17.2794 9 16.8978 9 16.5C9 16.1022 8.84196 15.7206 8.56066 15.4393C8.27936 15.158 7.89782 15 7.5 15ZM6 10V12C7.5913 12 9.11742 12.6321 10.2426 13.7574C11.3679 14.8826 12 16.4087 12 18H14C14 15.8783 13.1571 13.8434 11.6569 12.3431C10.1566 10.8429 8.12173 10 6 10ZM6 6V8C8.65216 8 11.1957 9.05357 13.0711 10.9289C14.9464 12.8043 16 15.3478 16 18H18C18 14.8174 16.7357 11.7652 14.4853 9.51472C12.2348 7.26428 9.1826 6 6 6Z" />
    </Svg>
  );
};
