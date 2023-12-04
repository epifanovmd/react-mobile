import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VideoOffOutlineIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3.41 1.85938L2 3.26937L4.73 5.99937H4C3.73478 5.99937 3.48043 6.10473 3.29289 6.29227C3.10536 6.4798 3 6.73416 3 6.99937V16.9994C3 17.2646 3.10536 17.5189 3.29289 17.7065C3.48043 17.894 3.73478 17.9994 4 17.9994H16C16.21 17.9994 16.39 17.9194 16.55 17.8194L19.73 20.9994L21.14 19.5894L12.28 10.7294L3.41 1.85938ZM5 15.9994V7.99937H6.73L14.73 15.9994H5ZM15 7.99937V10.6094L21 16.6094V6.49937L17 10.4994V6.99937C17 6.73416 16.8946 6.4798 16.7071 6.29227C16.5196 6.10473 16.2652 5.99937 16 5.99937H10.39L12.39 7.99937H15Z" />
    </Svg>
  );
};
