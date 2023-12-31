import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountNetworkOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 10C12.9283 10 13.8185 9.63125 14.4749 8.97487C15.1313 8.3185 15.5 7.42826 15.5 6.5C15.5 5.57174 15.1313 4.6815 14.4749 4.02513C13.8185 3.36875 12.9283 3 12 3C11.0717 3 10.1815 3.36875 9.52513 4.02513C8.86875 4.6815 8.5 5.57174 8.5 6.5C8.5 7.42826 8.86875 8.3185 9.52513 8.97487C10.1815 9.63125 11.0717 10 12 10ZM12 5C12.3978 5 12.7794 5.15804 13.0607 5.43934C13.342 5.72064 13.5 6.10218 13.5 6.5C13.5 6.89782 13.342 7.27936 13.0607 7.56066C12.7794 7.84196 12.3978 8 12 8C11.6022 8 11.2206 7.84196 10.9393 7.56066C10.658 7.27936 10.5 6.89782 10.5 6.5C10.5 6.10218 10.658 5.72064 10.9393 5.43934C11.2206 5.15804 11.6022 5 12 5ZM15 20C15 19.7348 14.8946 19.4804 14.7071 19.2929C14.5196 19.1054 14.2652 19 14 19H13V17H19V15.5C19 13.57 15.87 12 12 12C8.13 12 5 13.57 5 15.5V17H11V19H10C9.73478 19 9.48043 19.1054 9.29289 19.2929C9.10536 19.4804 9 19.7348 9 20H2V22H9C9 22.2652 9.10536 22.5196 9.29289 22.7071C9.48043 22.8946 9.73478 23 10 23H14C14.2652 23 14.5196 22.8946 14.7071 22.7071C14.8946 22.5196 15 22.2652 15 22H22V20H15ZM7.61 15C8.39 14.53 9.89 14 12 14C14.11 14 15.61 14.53 16.39 15H7.61Z" />
    </Svg>
  );
};
