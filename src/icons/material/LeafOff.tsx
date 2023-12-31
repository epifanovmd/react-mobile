import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LeafOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20.8401 22.7305L15.1401 17.0305C13.2601 18.7905 10.9201 20.0005 8.00011 20.0005C7.64011 20.0005 7.14011 19.8705 6.66011 19.7005L5.71011 22.0005L3.82011 21.3405C5.15011 18.0305 6.50011 14.3205 9.66011 11.5505L8.77011 10.6605C6.76011 12.0305 4.86011 14.1005 3.75011 17.2505C3.75011 17.2505 2.00011 15.5005 2.00011 13.5005C2.00011 12.0005 3.12011 9.32047 5.72011 7.61047L1.11011 3.00047L2.39011 1.73047L16.3901 15.7405L22.1101 21.4605L20.8401 22.7305ZM17.0001 8.00047C15.3501 8.37047 13.9301 8.88047 12.7001 9.50047L17.5001 14.2905C20.8701 9.35047 22.0001 3.00047 22.0001 3.00047C21.0301 4.95047 14.3501 5.24047 9.38011 6.18047L12.1501 8.95047C14.8101 8.00047 17.0001 8.00047 17.0001 8.00047Z" />
    </Svg>
  );
};
