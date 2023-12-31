import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoKartIcon: FC<FlexSvgProps> = ({
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
      <Path d="M18 10.0002H15.53L14.38 8.2802L15.8 7.3302L14.7 5.6702L10.2 8.6702L11.3 10.3302L12.73 9.3802L13.88 11.1202L13 12.0002H10.2L5.83 5.4502L4.17 6.5502L5.87 9.1102C3.04 9.6502 1 12.1202 1 15.0002V17.0002H3C3 17.7958 3.31607 18.5589 3.87868 19.1215C4.44129 19.6841 5.20435 20.0002 6 20.0002C6.79565 20.0002 7.55871 19.6841 8.12132 19.1215C8.68393 18.5589 9 17.7958 9 17.0002H15C15 17.7958 15.3161 18.5589 15.8787 19.1215C16.4413 19.6841 17.2044 20.0002 18 20.0002C18.7956 20.0002 19.5587 19.6841 20.1213 19.1215C20.6839 18.5589 21 17.7958 21 17.0002H23V15.0002C23 14.3436 22.8707 13.6934 22.6194 13.0868C22.3681 12.4802 21.9998 11.929 21.5355 11.4647C21.0712 11.0004 20.52 10.6321 19.9134 10.3808C19.3068 10.1295 18.6566 10.0002 18 10.0002ZM6 18.5002C5.60218 18.5002 5.22064 18.3422 4.93934 18.0609C4.65804 17.7796 4.5 17.398 4.5 17.0002C4.5 16.6024 4.65804 16.2208 4.93934 15.9395C5.22064 15.6582 5.60218 15.5002 6 15.5002C6.39782 15.5002 6.77936 15.6582 7.06066 15.9395C7.34196 16.2208 7.5 16.6024 7.5 17.0002C7.5 17.398 7.34196 17.7796 7.06066 18.0609C6.77936 18.3422 6.39782 18.5002 6 18.5002ZM18 18.5002C17.6022 18.5002 17.2206 18.3422 16.9393 18.0609C16.658 17.7796 16.5 17.398 16.5 17.0002C16.5 16.6024 16.658 16.2208 16.9393 15.9395C17.2206 15.6582 17.6022 15.5002 18 15.5002C18.3978 15.5002 18.7794 15.6582 19.0607 15.9395C19.342 16.2208 19.5 16.6024 19.5 17.0002C19.5 17.398 19.342 17.7796 19.0607 18.0609C18.7794 18.3422 18.3978 18.5002 18 18.5002Z" />
    </Svg>
  );
};
