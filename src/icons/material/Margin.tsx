import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MarginIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 4V9L18.5 7.5L5.5 20.5L3.5 18.5L16.5 5.5L15 4H20ZM17 20C16.2044 20 15.4413 19.6839 14.8787 19.1213C14.3161 18.5587 14 17.7956 14 17V15C14 14.2044 14.3161 13.4413 14.8787 12.8787C15.4413 12.3161 16.2044 12 17 12C17.7956 12 18.5587 12.3161 19.1213 12.8787C19.6839 13.4413 20 14.2044 20 15V17C20 17.7956 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7956 20 17 20ZM17 14C16.7348 14 16.4804 14.1054 16.2929 14.2929C16.1054 14.4804 16 14.7348 16 15V17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18C17.2652 18 17.5196 17.8946 17.7071 17.7071C17.8946 17.5196 18 17.2652 18 17V15C18 14.7348 17.8946 14.4804 17.7071 14.2929C17.5196 14.1054 17.2652 14 17 14ZM7 12C6.20435 12 5.44129 11.6839 4.87868 11.1213C4.31607 10.5587 4 9.79565 4 9V7C4 6.20435 4.31607 5.44129 4.87868 4.87868C5.44129 4.31607 6.20435 4 7 4C7.79565 4 8.55871 4.31607 9.12132 4.87868C9.68393 5.44129 10 6.20435 10 7V9C10 9.79565 9.68393 10.5587 9.12132 11.1213C8.55871 11.6839 7.79565 12 7 12ZM7 6C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7V9C6 9.26522 6.10536 9.51957 6.29289 9.70711C6.48043 9.89464 6.73478 10 7 10C7.26522 10 7.51957 9.89464 7.70711 9.70711C7.89464 9.51957 8 9.26522 8 9V7C8 6.73478 7.89464 6.48043 7.70711 6.29289C7.51957 6.10536 7.26522 6 7 6Z" />
    </Svg>
  );
};
