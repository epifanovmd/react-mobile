import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BadmintonIcon: FC<FlexSvgProps> = ({
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
      <Path d="M12.3 2.00004C11.33 2.03004 10.58 2.84004 10.61 3.80004C10.62 4.04004 10.67 4.27004 10.77 4.50004L11.06 5.14004C11.1 5.27004 11.03 5.41004 10.89 5.45004C10.8 5.50004 10.7 5.45004 10.63 5.37004L10.21 4.82004C9.88 4.40004 9.38 4.14004 8.85 4.13004C7.88 4.11004 7.08 4.88004 7.06 5.84004C7.05 6.26004 7.19 6.66004 7.45 7.00004L7.87 7.50004H7.88C7.96 7.63004 7.93 7.79004 7.82 7.87004C7.73 7.94004 7.61 7.94004 7.53 7.87004L7 7.45004C6.66 7.19004 6.25 7.05004 5.84 7.06004C4.88 7.08004 4.11 7.88004 4.13 8.85004C4.14 9.38004 4.4 9.88004 4.82 10.21L5.39 10.65C5.5 10.75 5.5 10.91 5.38 11C5.31 11.07 5.21 11.09 5.12 11.05H5.11L4.5 10.77C4.27 10.68 4.04 10.62 3.8 10.61C2.84 10.58 2.03 11.34 2 12.31C2 13.03 2.4 13.69 3.06 13.97L14.45 19.04L19.04 14.45L13.97 3.06004C13.69 2.39004 13 1.97004 12.3 2.00004ZM13.13 6.10004C13.55 6.09004 13.93 6.33004 14.09 6.71004L17.14 13.55L13.19 9.61004L12.26 7.50004C11.96 6.87004 12.42 6.12004 13.13 6.10004ZM9.85 8.85004C10.12 8.85004 10.37 8.95004 10.56 9.15004L15.37 13.96C15.77 14.34 15.78 14.97 15.4 15.37C15 15.77 14.38 15.78 13.96 15.37L9.15 10.56C8.75 10.18 8.74 9.54004 9.13 9.15004C9.32 8.95004 9.58 8.85004 9.85 8.85004ZM7.13 12.17C7.26 12.17 7.4 12.21 7.5 12.26L9.63 13.2L13.57 17.14L6.71 14.09C5.69 13.65 6.03 12.14 7.13 12.17ZM20.28 16.04L16.04 20.28L16.89 21.13C17.65 21.88 18.75 22.17 19.78 21.9C20.81 21.62 21.62 20.81 21.9 19.78C22.17 18.75 21.88 17.65 21.13 16.89L20.28 16.04Z" />
    </Svg>
  );
};
