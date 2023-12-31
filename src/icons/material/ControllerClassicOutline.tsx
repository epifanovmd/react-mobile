import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ControllerClassicOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.5 7C18.9587 7 20.3576 7.57946 21.3891 8.61091C22.4205 9.64236 23 11.0413 23 12.5C23 13.9587 22.4205 15.3576 21.3891 16.3891C20.3576 17.4205 18.9587 18 17.5 18C15.79 18 14.27 17.22 13.26 16H10.74C9.73 17.22 8.21 18 6.5 18C5.04131 18 3.64236 17.4205 2.61091 16.3891C1.57946 15.3576 1 13.9587 1 12.5C1 11.0413 1.57946 9.64236 2.61091 8.61091C3.64236 7.57946 5.04131 7 6.5 7H17.5ZM6.5 9C5.57174 9 4.6815 9.36875 4.02513 10.0251C3.36875 10.6815 3 11.5717 3 12.5C3 13.4283 3.36875 14.3185 4.02513 14.9749C4.6815 15.6313 5.57174 16 6.5 16C7.9 16 9.1 15.18 9.66 14H14.34C14.9 15.18 16.1 16 17.5 16C18.4283 16 19.3185 15.6313 19.9749 14.9749C20.6313 14.3185 21 13.4283 21 12.5C21 11.5717 20.6313 10.6815 19.9749 10.0251C19.3185 9.36875 18.4283 9 17.5 9H6.5ZM5.75 10.25H7.25V11.75H8.75V13.25H7.25V14.75H5.75V13.25H4.25V11.75H5.75V10.25ZM16.75 12.5C17.0152 12.5 17.2696 12.6054 17.4571 12.7929C17.6446 12.9804 17.75 13.2348 17.75 13.5C17.75 13.7652 17.6446 14.0196 17.4571 14.2071C17.2696 14.3946 17.0152 14.5 16.75 14.5C16.4848 14.5 16.2304 14.3946 16.0429 14.2071C15.8554 14.0196 15.75 13.7652 15.75 13.5C15.75 13.2348 15.8554 12.9804 16.0429 12.7929C16.2304 12.6054 16.4848 12.5 16.75 12.5ZM18.75 10.5C19.0152 10.5 19.2696 10.6054 19.4571 10.7929C19.6446 10.9804 19.75 11.2348 19.75 11.5C19.75 11.7652 19.6446 12.0196 19.4571 12.2071C19.2696 12.3946 19.0152 12.5 18.75 12.5C18.4848 12.5 18.2304 12.3946 18.0429 12.2071C17.8554 12.0196 17.75 11.7652 17.75 11.5C17.75 11.2348 17.8554 10.9804 18.0429 10.7929C18.2304 10.6054 18.4848 10.5 18.75 10.5Z" />
    </Svg>
  );
};
