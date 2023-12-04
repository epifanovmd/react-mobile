import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FolderAccountIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 17H11V16C11 14.67 13.67 14 15 14C16.33 14 19 14.67 19 16V17ZM15 9C15.5304 9 16.0391 9.21071 16.4142 9.58579C16.7893 9.96086 17 10.4696 17 11C17 11.5304 16.7893 12.0391 16.4142 12.4142C16.0391 12.7893 15.5304 13 15 13C14.4696 13 13.9609 12.7893 13.5858 12.4142C13.2107 12.0391 13 11.5304 13 11C13 9.89 13.9 9 15 9ZM20 6H12L10 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V8C22 6.89 21.1 6 20 6Z" />
    </Svg>
  );
};
