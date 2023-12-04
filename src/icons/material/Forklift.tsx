import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ForkliftIcon: FC<FlexSvgProps> = ({
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
      <Path d="M6 4V11H4C2.89 11 2 11.89 2 13V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20C5.79565 20 6.55871 19.6839 7.12132 19.1213C7.68393 18.5587 8 17.7956 8 17H10C10 17.7956 10.3161 18.5587 10.8787 19.1213C11.4413 19.6839 12.2044 20 13 20C13.7956 20 14.5587 19.6839 15.1213 19.1213C15.6839 18.5587 16 17.7956 16 17V13L12 4H6ZM17 5V19H22V17.5H18.5V5H17ZM7.5 5.5H11.2L14.5 13H7.5V5.5ZM5 15.5C5.39782 15.5 5.77936 15.658 6.06066 15.9393C6.34196 16.2206 6.5 16.6022 6.5 17C6.5 17.3978 6.34196 17.7794 6.06066 18.0607C5.77936 18.342 5.39782 18.5 5 18.5C4.60218 18.5 4.22064 18.342 3.93934 18.0607C3.65804 17.7794 3.5 17.3978 3.5 17C3.5 16.6022 3.65804 16.2206 3.93934 15.9393C4.22064 15.658 4.60218 15.5 5 15.5ZM13 15.5C13.3978 15.5 13.7794 15.658 14.0607 15.9393C14.342 16.2206 14.5 16.6022 14.5 17C14.5 17.3978 14.342 17.7794 14.0607 18.0607C13.7794 18.342 13.3978 18.5 13 18.5C12.6022 18.5 12.2206 18.342 11.9393 18.0607C11.658 17.7794 11.5 17.3978 11.5 17C11.5 16.6022 11.658 16.2206 11.9393 15.9393C12.2206 15.658 12.6022 15.5 13 15.5Z" />
    </Svg>
  );
};
