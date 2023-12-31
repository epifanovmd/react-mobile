import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MoreIcon: FC<FlexSvgProps> = ({
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
      <Path d="M19 13.5C18.6022 13.5 18.2206 13.342 17.9393 13.0607C17.658 12.7794 17.5 12.3978 17.5 12C17.5 11.6022 17.658 11.2206 17.9393 10.9393C18.2206 10.658 18.6022 10.5 19 10.5C19.3978 10.5 19.7794 10.658 20.0607 10.9393C20.342 11.2206 20.5 11.6022 20.5 12C20.5 12.3978 20.342 12.7794 20.0607 13.0607C19.7794 13.342 19.3978 13.5 19 13.5ZM14 13.5C13.6022 13.5 13.2206 13.342 12.9393 13.0607C12.658 12.7794 12.5 12.3978 12.5 12C12.5 11.6022 12.658 11.2206 12.9393 10.9393C13.2206 10.658 13.6022 10.5 14 10.5C14.3978 10.5 14.7794 10.658 15.0607 10.9393C15.342 11.2206 15.5 11.6022 15.5 12C15.5 12.3978 15.342 12.7794 15.0607 13.0607C14.7794 13.342 14.3978 13.5 14 13.5ZM9 13.5C8.60218 13.5 8.22064 13.342 7.93934 13.0607C7.65804 12.7794 7.5 12.3978 7.5 12C7.5 11.6022 7.65804 11.2206 7.93934 10.9393C8.22064 10.658 8.60218 10.5 9 10.5C9.39782 10.5 9.77936 10.658 10.0607 10.9393C10.342 11.2206 10.5 11.6022 10.5 12C10.5 12.3978 10.342 12.7794 10.0607 13.0607C9.77936 13.342 9.39782 13.5 9 13.5ZM22 3H7C6.31 3 5.77 3.35 5.41 3.88L0 12L5.41 20.11C5.77 20.64 6.37 21 7.06 21H22C22.5304 21 23.0391 20.7893 23.4142 20.4142C23.7893 20.0391 24 19.5304 24 19V5C24 3.89 23.1 3 22 3Z" />
    </Svg>
  );
};
