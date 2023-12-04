import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CarSportsIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12 8.5H7L4 11H3C1.89 11 1 11.89 1 13V16H3.17C3.6 17.2 4.73 18 6 18C7.27 18 8.4 17.2 8.82 16H15.17C15.6 17.2 16.73 18 18 18C19.27 18 20.4 17.2 20.82 16H23V15C23 13.89 21.97 13.53 21 13L12 8.5ZM5.25 12L7.5 10H11.5L15.5 12H5.25ZM6 13.5C6.39782 13.5 6.77936 13.658 7.06066 13.9393C7.34196 14.2206 7.5 14.6022 7.5 15C7.5 15.3978 7.34196 15.7794 7.06066 16.0607C6.77936 16.342 6.39782 16.5 6 16.5C5.60218 16.5 5.22064 16.342 4.93934 16.0607C4.65804 15.7794 4.5 15.3978 4.5 15C4.5 14.6022 4.65804 14.2206 4.93934 13.9393C5.22064 13.658 5.60218 13.5 6 13.5ZM18 13.5C18.3978 13.5 18.7794 13.658 19.0607 13.9393C19.342 14.2206 19.5 14.6022 19.5 15C19.5 15.3978 19.342 15.7794 19.0607 16.0607C18.7794 16.342 18.3978 16.5 18 16.5C17.6022 16.5 17.2206 16.342 16.9393 16.0607C16.658 15.7794 16.5 15.3978 16.5 15C16.5 14.6022 16.658 14.2206 16.9393 13.9393C17.2206 13.658 17.6022 13.5 18 13.5Z" />
    </Svg>
  );
};
