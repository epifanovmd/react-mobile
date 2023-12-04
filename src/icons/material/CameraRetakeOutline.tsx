import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CameraRetakeOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 5H16.83L15 3H9L7.17 5H4C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H20C20.5304 21 21.0391 20.7893 21.4142 20.4142C21.7893 20.0391 22 19.5304 22 19V7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5ZM20 19H4V7H8.05L9.88 5H14.12L16 7H20V19ZM12 18C10.92 18 9.86 17.65 9 17L10.44 15.56C10.91 15.85 11.45 16 12 16C12.7956 16 13.5587 15.6839 14.1213 15.1213C14.6839 14.5587 15 13.7956 15 13C15 12.2044 14.6839 11.4413 14.1213 10.8787C13.5587 10.3161 12.7956 10 12 10C10.74 10 9.6 10.8 9.18 12H11L8 15L5 12H7.1C7.65 9.29 10.29 7.55 13 8.1C15.7 8.65 17.45 11.29 16.9 14C16.42 16.33 14.38 18 12 18Z" />
    </Svg>
  );
};
