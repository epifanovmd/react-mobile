import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FilePercentIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 2L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H14ZM7.37 20L15 12.35L13.65 11L6 18.65L7.37 20ZM13 9H18.5L13 3.5V9ZM7.5 11C7.10218 11 6.72064 11.158 6.43934 11.4393C6.15804 11.7206 6 12.1022 6 12.5C6 12.8978 6.15804 13.2794 6.43934 13.5607C6.72064 13.842 7.10218 14 7.5 14C7.89782 14 8.27936 13.842 8.56066 13.5607C8.84196 13.2794 9 12.8978 9 12.5C9 12.1022 8.84196 11.7206 8.56066 11.4393C8.27936 11.158 7.89782 11 7.5 11ZM13.5 17C13.1022 17 12.7206 17.158 12.4393 17.4393C12.158 17.7206 12 18.1022 12 18.5C12 18.8978 12.158 19.2794 12.4393 19.5607C12.7206 19.842 13.1022 20 13.5 20C13.8978 20 14.2794 19.842 14.5607 19.5607C14.842 19.2794 15 18.8978 15 18.5C15 18.1022 14.842 17.7206 14.5607 17.4393C14.2794 17.158 13.8978 17 13.5 17Z" />
    </Svg>
  );
};
