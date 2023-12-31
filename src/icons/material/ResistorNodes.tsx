import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ResistorNodesIcon: FC<FlexSvgProps> = ({
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
      <Path d="M2 11H3.67C4.08 9.83 5.19 9 6.5 9C7.29565 9 8.05871 9.31607 8.62132 9.87868C9.18393 10.4413 9.5 11.2044 9.5 12C9.5 12.65 9.29 13.25 8.94 13.74L10.07 15.35L13.11 4L14.61 6.13L16.7 9.11L17.5 9C18.81 9 19.92 9.83 20.33 11H22V13H20.33C19.92 14.17 18.81 15 17.5 15C16.7044 15 15.9413 14.6839 15.3787 14.1213C14.8161 13.5587 14.5 12.7956 14.5 12C14.5 11.35 14.71 10.75 15.06 10.26L13.93 8.65L10.89 20L7.3 14.89C7.05 14.96 6.78 15 6.5 15C5.19 15 4.08 14.17 3.67 13H2V11ZM17.5 10.5C17.1022 10.5 16.7206 10.658 16.4393 10.9393C16.158 11.2206 16 11.6022 16 12C16 12.3978 16.158 12.7794 16.4393 13.0607C16.7206 13.342 17.1022 13.5 17.5 13.5C17.8978 13.5 18.2794 13.342 18.5607 13.0607C18.842 12.7794 19 12.3978 19 12C19 11.6022 18.842 11.2206 18.5607 10.9393C18.2794 10.658 17.8978 10.5 17.5 10.5ZM6.5 10.5C6.10218 10.5 5.72064 10.658 5.43934 10.9393C5.15804 11.2206 5 11.6022 5 12C5 12.3978 5.15804 12.7794 5.43934 13.0607C5.72064 13.342 6.10218 13.5 6.5 13.5C6.89782 13.5 7.27936 13.342 7.56066 13.0607C7.84196 12.7794 8 12.3978 8 12C8 11.6022 7.84196 11.2206 7.56066 10.9393C7.27936 10.658 6.89782 10.5 6.5 10.5Z" />
    </Svg>
  );
};
