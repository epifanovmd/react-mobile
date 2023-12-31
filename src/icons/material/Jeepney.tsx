import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const JeepneyIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 13V7H20V4H4V7H5V13H2C2 13.93 2.5 14.71 3.5 14.93V20C3.5 20.2652 3.60536 20.5196 3.79289 20.7071C3.98043 20.8946 4.23478 21 4.5 21H5.5C5.76522 21 6.01957 20.8946 6.20711 20.7071C6.39464 20.5196 6.5 20.2652 6.5 20V19H17.5V20C17.5 20.2652 17.6054 20.5196 17.7929 20.7071C17.9804 20.8946 18.2348 21 18.5 21H19.5C19.7652 21 20.0196 20.8946 20.2071 20.7071C20.3946 20.5196 20.5 20.2652 20.5 20V14.93C21.5 14.7 22 13.93 22 13H19ZM8 15C7.60218 15 7.22064 14.842 6.93934 14.5607C6.65804 14.2794 6.5 13.8978 6.5 13.5C6.5 13.1022 6.65804 12.7206 6.93934 12.4393C7.22064 12.158 7.60218 12 8 12C8.39782 12 8.77936 12.158 9.06066 12.4393C9.34196 12.7206 9.5 13.1022 9.5 13.5C9.5 13.8978 9.34196 14.2794 9.06066 14.5607C8.77936 14.842 8.39782 15 8 15ZM16 15C15.6022 15 15.2206 14.842 14.9393 14.5607C14.658 14.2794 14.5 13.8978 14.5 13.5C14.5 13.1022 14.658 12.7206 14.9393 12.4393C15.2206 12.158 15.6022 12 16 12C16.3978 12 16.7794 12.158 17.0607 12.4393C17.342 12.7206 17.5 13.1022 17.5 13.5C17.5 13.8978 17.342 14.2794 17.0607 14.5607C16.7794 14.842 16.3978 15 16 15ZM17.5 10.5C15.92 10.18 14.03 10 12 10C9.97 10 8 10.18 6.5 10.5V7H17.5V10.5Z" />
    </Svg>
  );
};
