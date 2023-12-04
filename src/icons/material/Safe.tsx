import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SafeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19V20H6V19H17V20H19V19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V16H22V14H21V9H22V7H21V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4H4ZM4 6H19V17H4V6ZM13.5 7.5C12.4391 7.5 11.4217 7.92143 10.6716 8.67157C9.92143 9.42172 9.5 10.4391 9.5 11.5C9.5 12.5609 9.92143 13.5783 10.6716 14.3284C11.4217 15.0786 12.4391 15.5 13.5 15.5C14.5609 15.5 15.5783 15.0786 16.3284 14.3284C17.0786 13.5783 17.5 12.5609 17.5 11.5C17.5 10.4391 17.0786 9.42172 16.3284 8.67157C15.5783 7.92143 14.5609 7.5 13.5 7.5ZM5 9V14H7V9H5ZM13.5 9.5C14.0304 9.5 14.5391 9.71071 14.9142 10.0858C15.2893 10.4609 15.5 10.9696 15.5 11.5C15.5 12.0304 15.2893 12.5391 14.9142 12.9142C14.5391 13.2893 14.0304 13.5 13.5 13.5C12.9696 13.5 12.4609 13.2893 12.0858 12.9142C11.7107 12.5391 11.5 12.0304 11.5 11.5C11.5 10.9696 11.7107 10.4609 12.0858 10.0858C12.4609 9.71071 12.9696 9.5 13.5 9.5Z" />
    </Svg>
  );
};
