import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DnsOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 15V19H5V15H19ZM20 13H4C3.73478 13 3.48043 13.1054 3.29289 13.2929C3.10536 13.4804 3 13.7348 3 14V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V14C21 13.7348 20.8946 13.4804 20.7071 13.2929C20.5196 13.1054 20.2652 13 20 13ZM7 18.5C6.60218 18.5 6.22064 18.342 5.93934 18.0607C5.65804 17.7794 5.5 17.3978 5.5 17C5.5 16.6022 5.65804 16.2206 5.93934 15.9393C6.22064 15.658 6.60218 15.5 7 15.5C7.39782 15.5 7.77936 15.658 8.06066 15.9393C8.34196 16.2206 8.5 16.6022 8.5 17C8.5 17.3978 8.34196 17.7794 8.06066 18.0607C7.77936 18.342 7.39782 18.5 7 18.5ZM19 5V9H5V5H19ZM20 3H4C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V10C3 10.2652 3.10536 10.5196 3.29289 10.7071C3.48043 10.8946 3.73478 11 4 11H20C20.2652 11 20.5196 10.8946 20.7071 10.7071C20.8946 10.5196 21 10.2652 21 10V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3ZM7 8.5C6.60218 8.5 6.22064 8.34196 5.93934 8.06066C5.65804 7.77936 5.5 7.39782 5.5 7C5.5 6.60218 5.65804 6.22064 5.93934 5.93934C6.22064 5.65804 6.60218 5.5 7 5.5C7.39782 5.5 7.77936 5.65804 8.06066 5.93934C8.34196 6.22064 8.5 6.60218 8.5 7C8.5 7.39782 8.34196 7.77936 8.06066 8.06066C7.77936 8.34196 7.39782 8.5 7 8.5Z" />
    </Svg>
  );
};
