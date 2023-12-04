import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MoleculeIcon: FC<FlexSvgProps> = ({
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
      <Path d="M7.27 10L9 7H14.42L15.58 5L15.5 4.5C15.5 4.10218 15.658 3.72064 15.9393 3.43934C16.2206 3.15804 16.6022 3 17 3C17.3978 3 17.7794 3.15804 18.0607 3.43934C18.342 3.72064 18.5 4.10218 18.5 4.5C18.5 5.21 18 5.81 17.33 5.96L16.37 7.63L17.73 10L18.59 8.5L18.5 8C18.5 7.60218 18.658 7.22064 18.9393 6.93934C19.2206 6.65804 19.6022 6.5 20 6.5C20.3978 6.5 20.7794 6.65804 21.0607 6.93934C21.342 7.22064 21.5 7.60218 21.5 8C21.5 8.71 21 9.3 20.35 9.46L18.89 12L20.62 15C21.39 15.07 22 15.71 22 16.5C22 16.8978 21.842 17.2794 21.5607 17.5607C21.2794 17.842 20.8978 18 20.5 18C20.1022 18 19.7206 17.842 19.4393 17.5607C19.158 17.2794 19 16.8978 19 16.5V16.24L17.73 14L16.37 16.37L17.33 18.04C18 18.19 18.5 18.79 18.5 19.5C18.5 19.8978 18.342 20.2794 18.0607 20.5607C17.7794 20.842 17.3978 21 17 21C16.6022 21 16.2206 20.842 15.9393 20.5607C15.658 20.2794 15.5 19.8978 15.5 19.5L15.58 19L14.42 17H10.58L9.42 19L9.5 19.5C9.5 19.8978 9.34196 20.2794 9.06066 20.5607C8.77936 20.842 8.39782 21 8 21C7.60218 21 7.22064 20.842 6.93934 20.5607C6.65804 20.2794 6.5 19.8978 6.5 19.5C6.5 18.79 7 18.19 7.67 18.04L8.63 16.37L4.38 9C3.61 8.93 3 8.29 3 7.5C3 7.10218 3.15804 6.72064 3.43934 6.43934C3.72064 6.15804 4.10218 6 4.5 6C4.89782 6 5.27936 6.15804 5.56066 6.43934C5.84196 6.72064 6 7.10218 6 7.5C6 7.59 6 7.68 6 7.76L7.27 10ZM10.15 9L8.42 12L10.15 15H14.85L16.58 12L14.85 9H10.15Z" />
    </Svg>
  );
};
