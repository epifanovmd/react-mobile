import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const VectorSelectionIcon: FC<FlexSvgProps> = ({
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
      <Path d="M3 1H5V3H3V5H1V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1ZM14 1C14.5304 1 15.0391 1.21071 15.4142 1.58579C15.7893 1.96086 16 2.46957 16 3V5H14V3H12V1H14ZM20 7C20.5304 7 21.0391 7.21071 21.4142 7.58579C21.7893 7.96086 22 8.46957 22 9V11H20V9H18V7H20ZM22 20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H18V20H20V18H22V20ZM20 13H22V16H20V13ZM13 9V7H16V10H14V9H13ZM13 22V20H16V22H13ZM9 22C8.46957 22 7.96086 21.7893 7.58579 21.4142C7.21071 21.0391 7 20.5304 7 20V18H9V20H11V22H9ZM7 16V13H9V14H10V16H7ZM7 3V1H10V3H7ZM3 16C2.46957 16 1.96086 15.7893 1.58579 15.4142C1.21071 15.0391 1 14.5304 1 14V12H3V14H5V16H3ZM1 7H3V10H1V7ZM9 7H11V9H9V11H7V9C7 8.46957 7.21071 7.96086 7.58579 7.58579C7.96086 7.21071 8.46957 7 9 7ZM16 14C16 14.5304 15.7893 15.0391 15.4142 15.4142C15.0391 15.7893 14.5304 16 14 16H12V14H14V12H16V14Z" />
    </Svg>
  );
};
