import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const OpenSourceInitiativeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M15.41 22.0005C15.35 22.0005 15.28 22.0005 15.22 22.0005C15.1 21.9505 15 21.8505 14.96 21.7305L12.74 15.9305C12.65 15.6905 12.77 15.4205 13 15.3205C13.71 15.0605 14.28 14.5005 14.58 13.8305C15.22 12.4005 14.58 10.7305 13.15 10.0905C11.72 9.45047 10.05 10.0905 9.40997 11.5005C9.10997 12.2105 9.08997 13.0005 9.35997 13.6905C9.65997 14.4305 10.25 15.0005 11 15.2805C11.24 15.3705 11.37 15.6405 11.28 15.8905L8.99997 21.6905C8.95997 21.8105 8.86997 21.9105 8.74997 21.9605C8.62997 22.0005 8.49997 22.0005 8.38997 21.9605C3.23997 19.9705 0.66997 14.1805 2.65997 9.03047C4.64997 3.88047 10.44 1.31047 15.59 3.30047C18.06 4.26047 20.05 6.15047 21.13 8.57047C22.22 11.0005 22.29 13.7505 21.33 16.2205C20.32 18.8805 18.23 21.0005 15.58 22.0005C15.5 22.0005 15.47 22.0005 15.41 22.0005ZM12 3.59047C7.02997 3.46047 2.89997 7.39047 2.76997 12.3605C2.67997 16.0805 4.87997 19.4705 8.31997 20.9005L10.21 16.0005C8.37997 15.0005 7.68997 12.7205 8.67997 10.8905C9.66997 9.06047 11.96 8.38047 13.79 9.36047C15.62 10.3505 16.31 12.6405 15.32 14.4705C14.97 15.1205 14.44 15.6505 13.79 16.0005L15.68 20.9305C17.86 19.9505 19.57 18.1605 20.44 15.9305C22.28 11.3105 20.04 6.08047 15.42 4.23047C14.33 3.80047 13.17 3.58047 12 3.59047Z" />
    </Svg>
  );
};
