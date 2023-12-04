import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FaceAgentIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18.72 14.7599C19.07 13.9099 19.26 12.9999 19.26 11.9999C19.26 11.2799 19.15 10.5899 18.96 9.94992C18.31 10.0999 17.63 10.1799 16.92 10.1799C13.86 10.1799 11.15 8.66992 9.5 6.33992C8.61 8.49992 6.91 10.2599 4.77 11.2199C4.73 11.4699 4.73 11.7399 4.73 11.9999C4.73 13.928 5.49594 15.7772 6.85933 17.1406C8.22272 18.504 10.0719 19.2699 12 19.2699C13.05 19.2699 14.06 19.0399 14.97 18.6299C15.54 19.7199 15.8 20.2599 15.78 20.2599C14.14 20.8099 12.87 21.0799 12 21.0799C9.58 21.0799 7.27 20.1299 5.57 18.4199C4.53 17.3799 3.76 16.1099 3.33 14.7299H2V10.1799H3.09C3.93 6.03992 7.6 2.91992 12 2.91992C14.4 2.91992 16.71 3.86992 18.42 5.57992C19.69 6.83992 20.54 8.44992 20.89 10.1799H22V14.6699V14.6899V14.7299H21.94L18.38 17.9999L13.08 17.3999V15.7299H17.91L18.72 14.7599ZM9.27 11.7699C9.57 11.7699 9.86 11.8899 10.07 12.1099C10.28 12.3199 10.4 12.6099 10.4 12.9099C10.4 13.2099 10.28 13.4999 10.07 13.7099C9.86 13.9199 9.57 14.0399 9.27 14.0399C8.64 14.0399 8.13 13.5399 8.13 12.9099C8.13 12.2799 8.64 11.7699 9.27 11.7699ZM14.72 11.7699C15.35 11.7699 15.85 12.2799 15.85 12.9099C15.85 13.5399 15.35 14.0399 14.72 14.0399C14.09 14.0399 13.58 13.5399 13.58 12.9099C13.58 12.6076 13.7001 12.3176 13.9139 12.1038C14.1277 11.89 14.4177 11.7699 14.72 11.7699Z" />
    </Svg>
  );
};
