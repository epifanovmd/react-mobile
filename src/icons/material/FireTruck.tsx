import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FireTruckIcon: FC<FlexSvgProps> = ({
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
      <Path d="M17.04 2C16.85 2 16.66 2.04 16.5 2.14L5.59 8.5H9.55L17.5 3.86C18 3.58 18.13 2.97 17.85 2.5C17.68 2.2 17.38 2 17.04 2ZM16 8V10H3C2.46957 10 1.96086 10.2107 1.58579 10.5858C1.21071 10.9609 1 11.4696 1 12H2V15H1V19H3C3 19.7956 3.31607 20.5587 3.87868 21.1213C4.44129 21.6839 5.20435 22 6 22C6.79565 22 7.55871 21.6839 8.12132 21.1213C8.68393 20.5587 9 19.7956 9 19H15C15 19.7956 15.3161 20.5587 15.8787 21.1213C16.4413 21.6839 17.2044 22 18 22C18.7956 22 19.5587 21.6839 20.1213 21.1213C20.6839 20.5587 21 19.7956 21 19H23V12.5L19.5 8H16ZM18 9.5H19L21.5 12.5V13.5H18V9.5ZM4 12H7V15H4V12ZM9 12H12V15H9V12ZM14 12H16V15H14V12ZM6 17.5C6.39782 17.5 6.77936 17.658 7.06066 17.9393C7.34196 18.2206 7.5 18.6022 7.5 19C7.5 19.3978 7.34196 19.7794 7.06066 20.0607C6.77936 20.342 6.39782 20.5 6 20.5C5.60218 20.5 5.22064 20.342 4.93934 20.0607C4.65804 19.7794 4.5 19.3978 4.5 19C4.5 18.6022 4.65804 18.2206 4.93934 17.9393C5.22064 17.658 5.60218 17.5 6 17.5ZM18 17.5C18.3978 17.5 18.7794 17.658 19.0607 17.9393C19.342 18.2206 19.5 18.6022 19.5 19C19.5 19.3978 19.342 19.7794 19.0607 20.0607C18.7794 20.342 18.3978 20.5 18 20.5C17.6022 20.5 17.2206 20.342 16.9393 20.0607C16.658 19.7794 16.5 19.3978 16.5 19C16.5 18.6022 16.658 18.2206 16.9393 17.9393C17.2206 17.658 17.6022 17.5 18 17.5Z" />
    </Svg>
  );
};
