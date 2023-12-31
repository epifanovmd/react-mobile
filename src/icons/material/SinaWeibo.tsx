import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SinaWeiboIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.82007 13.8705C10.8901 13.8705 11.7701 14.7405 11.7701 15.8205C11.7701 16.3377 11.5646 16.8337 11.1989 17.1994C10.8332 17.5651 10.3372 17.7705 9.82007 17.7705C8.74007 17.7705 7.87007 16.8905 7.87007 15.8205C7.87007 14.7405 8.74007 13.8705 9.82007 13.8705ZM14.5001 3.34055L15.1801 3.31055C18.9401 3.31055 22.0001 6.37055 22.0001 10.1305L21.9501 10.9505L20.7601 10.5805L20.7801 10.1305C20.7801 7.04055 18.2701 4.53055 15.1801 4.53055L14.8301 4.54055L14.5001 3.34055ZM15.3201 6.23055C17.3801 6.30055 19.0501 8.00055 19.0801 10.0605L17.8401 9.68055C17.6501 8.56055 16.7801 7.68055 15.6701 7.50055L15.3201 6.23055ZM2.00007 15.4105C1.97007 14.8005 2.07007 12.6405 4.95007 9.97055C8.35007 6.81055 9.82007 7.05055 9.82007 7.05055C9.82007 7.05055 13.0001 6.75055 11.0601 10.4605H11.1301C11.6001 9.96055 12.6201 9.21055 14.6901 9.00055C16.7701 8.79055 16.7701 10.5005 16.5001 11.7005C18.3801 12.6405 19.5601 14.0305 19.5601 15.5805C19.5601 18.4005 15.6301 20.6905 10.7801 20.6905H10.6501H10.5001C7.00007 20.6905 4.00007 19.4205 2.71007 17.5905C2.25007 16.9705 2.00007 16.2905 2.00007 15.5805V15.4105ZM9.82007 11.9205C6.59007 11.9205 3.97007 13.6705 3.97007 15.8205C3.97007 17.9705 6.59007 19.7205 9.82007 19.7205C13.0501 19.7205 15.6701 17.9705 15.6701 15.8205C15.6701 13.6705 13.0501 11.9205 9.82007 11.9205Z" />
    </Svg>
  );
};
