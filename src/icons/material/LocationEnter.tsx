import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LocationEnterIcon: FC<FlexSvgProps> = ({
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
      <Path d="M14 12L10 8V11H2V13H10V16L14 12ZM22 12C22.0005 14.3895 21.1453 16.7002 19.5893 18.5137C18.0333 20.3272 15.8794 21.5235 13.5175 21.8861C11.1557 22.2487 8.74208 21.7536 6.71373 20.4905C4.68538 19.2273 3.17639 17.2796 2.46 15H4.59C5.2862 16.7211 6.55932 18.1464 8.19117 19.0318C9.82301 19.9171 11.712 20.2073 13.5343 19.8527C15.3567 19.4981 16.999 18.5207 18.1797 17.088C19.3605 15.6553 20.0062 13.8565 20.0062 12C20.0062 10.1435 19.3605 8.34471 18.1797 6.91203C16.999 5.47935 15.3567 4.50194 13.5343 4.14731C11.712 3.79268 9.82301 4.08291 8.19117 4.96825C6.55932 5.8536 5.2862 7.27894 4.59 9H2.46C3.17639 6.72041 4.68538 4.77269 6.71373 3.50953C8.74208 2.24637 11.1557 1.75127 13.5175 2.11389C15.8794 2.4765 18.0333 3.67286 19.5893 5.48633C21.1453 7.2998 22.0005 9.61049 22 12Z" />
    </Svg>
  );
};
