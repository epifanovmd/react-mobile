import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PuzzleOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22 13.5C22 15.26 20.7 16.72 19 16.96V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H13.2V21.7C13.2 20.9839 12.9155 20.2972 12.4092 19.7908C11.9028 19.2845 11.2161 19 10.5 19C9 19 7.8 20.21 7.8 21.7V22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V16.2H2.3C3.79 16.2 5 15 5 13.5C5 12 3.79 10.8 2.3 10.8H2V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H7.04C7.28 3.3 8.74 2 10.5 2C12.26 2 13.72 3.3 13.96 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7V10.04C20.7 10.28 22 11.74 22 13.5ZM17 15H18.5C18.8978 15 19.2794 14.842 19.5607 14.5607C19.842 14.2794 20 13.8978 20 13.5C20 13.1022 19.842 12.7206 19.5607 12.4393C19.2794 12.158 18.8978 12 18.5 12H17V7H12V5.5C12 5.10218 11.842 4.72064 11.5607 4.43934C11.2794 4.15804 10.8978 4 10.5 4C10.1022 4 9.72064 4.15804 9.43934 4.43934C9.15804 4.72064 9 5.10218 9 5.5V7H4V9.12C5.76 9.8 7 11.5 7 13.5C7 15.5 5.75 17.2 4 17.88V20H6.12C6.8 18.25 8.5 17 10.5 17C12.5 17 14.2 18.25 14.88 20H17V15Z" />
    </Svg>
  );
};
