import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VoicemailIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.5 15C17.5717 15 16.6815 14.6313 16.0251 13.9749C15.3687 13.3185 15 12.4283 15 11.5C15 10.5717 15.3687 9.6815 16.0251 9.02513C16.6815 8.36875 17.5717 8 18.5 8C19.4283 8 20.3185 8.36875 20.9749 9.02513C21.6313 9.6815 22 10.5717 22 11.5C22 12.4283 21.6313 13.3185 20.9749 13.9749C20.3185 14.6313 19.4283 15 18.5 15ZM5.5 15C4.57174 15 3.6815 14.6313 3.02513 13.9749C2.36875 13.3185 2 12.4283 2 11.5C2 10.5717 2.36875 9.6815 3.02513 9.02513C3.6815 8.36875 4.57174 8 5.5 8C6.42826 8 7.3185 8.36875 7.97487 9.02513C8.63125 9.6815 9 10.5717 9 11.5C9 12.4283 8.63125 13.3185 7.97487 13.9749C7.3185 14.6313 6.42826 15 5.5 15ZM18.5 6C17.0413 6 15.6424 6.57946 14.6109 7.61091C13.5795 8.64236 13 10.0413 13 11.5C13 12.83 13.47 14.05 14.26 15H9.74C10.53 14.05 11 12.83 11 11.5C11 10.0413 10.4205 8.64236 9.38909 7.61091C8.35764 6.57946 6.95869 6 5.5 6C4.04131 6 2.64236 6.57946 1.61091 7.61091C0.579463 8.64236 0 10.0413 0 11.5C0 12.9587 0.579463 14.3576 1.61091 15.3891C2.64236 16.4205 4.04131 17 5.5 17H18.5C19.9587 17 21.3576 16.4205 22.3891 15.3891C23.4205 14.3576 24 12.9587 24 11.5C24 10.0413 23.4205 8.64236 22.3891 7.61091C21.3576 6.57946 19.9587 6 18.5 6Z" />
    </Svg>
  );
};
