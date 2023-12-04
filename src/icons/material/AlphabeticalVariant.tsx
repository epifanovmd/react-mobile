import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlphabeticalVariantIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 7C2.46957 7 1.96086 7.21071 1.58579 7.58579C1.21071 7.96086 1 8.46957 1 9V17H3V13H5V17H7V9C7 8.46957 6.78929 7.96086 6.41421 7.58579C6.03914 7.21071 5.53043 7 5 7H3ZM3 9H5V11H3V9ZM15 10.5V9C15 8.46957 14.7893 7.96086 14.4142 7.58579C14.0391 7.21071 13.5304 7 13 7H9V17H13C13.5304 17 14.0391 16.7893 14.4142 16.4142C14.7893 16.0391 15 15.5304 15 15V13.5C14.9899 13.1054 14.8286 12.7297 14.5495 12.4505C14.2703 12.1714 13.8946 12.0101 13.5 12C13.8946 11.9899 14.2703 11.8286 14.5495 11.5495C14.8286 11.2703 14.9899 10.8946 15 10.5ZM13 15H11V13H13V15ZM13 11H11V9H13V11ZM19 7C18.4696 7 17.9609 7.21071 17.5858 7.58579C17.2107 7.96086 17 8.46957 17 9V15C17 15.5304 17.2107 16.0391 17.5858 16.4142C17.9609 16.7893 18.4696 17 19 17H21C21.5304 17 22.0391 16.7893 22.4142 16.4142C22.7893 16.0391 23 15.5304 23 15V14H21V15H19V9H21V10H23V9C23 8.46957 22.7893 7.96086 22.4142 7.58579C22.0391 7.21071 21.5304 7 21 7H19Z" />
    </Svg>
  );
};
