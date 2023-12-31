import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CassetteIcon: FC<FlexSvgProps> = ({
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
      <Path d="M4 5C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H6L7 17H17L18 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5H4ZM6.5 10C6.89782 10 7.27936 10.158 7.56066 10.4393C7.84196 10.7206 8 11.1022 8 11.5C8 11.8978 7.84196 12.2794 7.56066 12.5607C7.27936 12.842 6.89782 13 6.5 13C6.10218 13 5.72064 12.842 5.43934 12.5607C5.15804 12.2794 5 11.8978 5 11.5C5 11.1022 5.15804 10.7206 5.43934 10.4393C5.72064 10.158 6.10218 10 6.5 10ZM9 10H15V13H9V10ZM17.5 10C17.8978 10 18.2794 10.158 18.5607 10.4393C18.842 10.7206 19 11.1022 19 11.5C19 11.8978 18.842 12.2794 18.5607 12.5607C18.2794 12.842 17.8978 13 17.5 13C17.1022 13 16.7206 12.842 16.4393 12.5607C16.158 12.2794 16 11.8978 16 11.5C16 11.1022 16.158 10.7206 16.4393 10.4393C16.7206 10.158 17.1022 10 17.5 10Z" />
    </Svg>
  );
};
