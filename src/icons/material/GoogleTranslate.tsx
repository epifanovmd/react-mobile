import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GoogleTranslateIcon: FC<FlexSvgProps> = ({
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
      <Path d="M20 5H10.88L10 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H11L12 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20V7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5ZM7.17 14.59C6.08526 14.59 5.04496 14.1591 4.27793 13.3921C3.51091 12.625 3.08 11.5847 3.08 10.5C3.08 9.41526 3.51091 8.37496 4.27793 7.60793C5.04496 6.84091 6.08526 6.41 7.17 6.41C8.21 6.41 9.16 6.78 9.91 7.5L10 7.54L8.75 8.72L8.69 8.67C8.4 8.4 7.91 8.08 7.17 8.08C5.86 8.08 4.79 9.17 4.79 10.5C4.79 11.83 5.86 12.92 7.17 12.92C8.54 12.92 9.13 12.05 9.29 11.46H7.08V9.91H11.03L11.04 10C11.08 10.19 11.09 10.38 11.09 10.59C11.09 12.94 9.5 14.59 7.17 14.59ZM13.2 12.88C13.53 13.5 13.94 14.06 14.39 14.58L13.85 15.11L13.2 12.88ZM13.97 12.12H13L12.67 11.08H16.66C16.66 11.08 16.32 12.39 15.1 13.82C14.58 13.2 14.21 12.59 13.97 12.12ZM21 20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H13L15 19L14.19 16.23L15.11 15.31L17.79 18L18.5 17.27L15.81 14.59C16.71 13.56 17.41 12.34 17.73 11.08H19V10.04H15.36V9H14.32V10.04H12.36L11.18 6H20C20.2652 6 20.5196 6.10536 20.7071 6.29289C20.8946 6.48043 21 6.73478 21 7V20Z" />
    </Svg>
  );
};
