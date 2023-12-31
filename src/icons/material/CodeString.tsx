import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CodeStringIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C3.89 21 3 20.1 3 19V5ZM12.5 11H11.5C11.1022 11 10.7206 10.842 10.4393 10.5607C10.158 10.2794 10 9.89782 10 9.5C10 9.10218 10.158 8.72064 10.4393 8.43934C10.7206 8.15804 11.1022 8 11.5 8H12.5C12.8978 8 13.2794 8.15804 13.5607 8.43934C13.842 8.72064 14 9.10218 14 9.5H16C16 8.57174 15.6313 7.6815 14.9749 7.02513C14.3185 6.36875 13.4283 6 12.5 6H11.5C10.5717 6 9.6815 6.36875 9.02513 7.02513C8.36875 7.6815 8 8.57174 8 9.5C8 10.4283 8.36875 11.3185 9.02513 11.9749C9.6815 12.6313 10.5717 13 11.5 13H12.5C12.8978 13 13.2794 13.158 13.5607 13.4393C13.842 13.7206 14 14.1022 14 14.5C14 14.8978 13.842 15.2794 13.5607 15.5607C13.2794 15.842 12.8978 16 12.5 16H11.5C11.1022 16 10.7206 15.842 10.4393 15.5607C10.158 15.2794 10 14.8978 10 14.5H8C8 15.4283 8.36875 16.3185 9.02513 16.9749C9.6815 17.6313 10.5717 18 11.5 18H12.5C13.4283 18 14.3185 17.6313 14.9749 16.9749C15.6313 16.3185 16 15.4283 16 14.5C16 13.5717 15.6313 12.6815 14.9749 12.0251C14.3185 11.3687 13.4283 11 12.5 11Z" />
    </Svg>
  );
};
