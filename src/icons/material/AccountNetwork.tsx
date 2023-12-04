import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountNetworkIcon: FC<FlexSvgProps> = ({
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
      <Path d="M13 17V19H14C14.2652 19 14.5196 19.1054 14.7071 19.2929C14.8946 19.4804 15 19.7348 15 20H22V22H15C15 22.2652 14.8946 22.5196 14.7071 22.7071C14.5196 22.8946 14.2652 23 14 23H10C9.73478 23 9.48043 22.8946 9.29289 22.7071C9.10536 22.5196 9 22.2652 9 22H2V20H9C9 19.7348 9.10536 19.4804 9.29289 19.2929C9.48043 19.1054 9.73478 19 10 19H11V17H5V15.5C5 13.57 8.13 12 12 12C15.87 12 19 13.57 19 15.5V17H13ZM12 3C12.9283 3 13.8185 3.36875 14.4749 4.02513C15.1313 4.6815 15.5 5.57174 15.5 6.5C15.5 7.42826 15.1313 8.3185 14.4749 8.97487C13.8185 9.63125 12.9283 10 12 10C11.0717 10 10.1815 9.63125 9.52513 8.97487C8.86875 8.3185 8.5 7.42826 8.5 6.5C8.5 5.57174 8.86875 4.6815 9.52513 4.02513C10.1815 3.36875 11.0717 3 12 3Z" />
    </Svg>
  );
};
