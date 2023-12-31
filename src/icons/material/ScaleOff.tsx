import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScaleOffIcon: FC<FlexSvgProps> = ({
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
      <Path d="M22.11 21.4605L20.84 22.7305L19.11 21.0005H18V19.8905L12.11 14.0005H11V12.8905L10.31 12.2005C9.13864 12.4443 8.03775 12.9503 7.08999 13.6805L8.45999 15.0605L7.04999 16.4705L5.67999 15.1005C4.79783 16.2304 4.23803 17.5781 4.05999 19.0005H5.99999V21.0005H1.99999V20.0005C2.00056 17.9306 2.64343 15.9119 3.83991 14.2228C5.03639 12.5338 6.72751 11.2577 8.67999 10.5705L3.84999 5.74047L1.99999 5.00047V3.89047L1.10999 3.00047L2.38999 1.73047L22.11 21.4605ZM21.91 18.7105C21.642 16.6449 20.7357 14.7145 19.3177 13.1889C17.8996 11.6632 16.0405 10.6185 14 10.2005V8.20047L22 5.00047V3.00047H6.19999L21.91 18.7105ZM12 18.0005C11.6937 17.9961 11.3913 18.0683 11.12 18.2105L7.26999 20.0005L11.12 21.7905C11.3913 21.9326 11.6937 22.0048 12 22.0005C12.5304 22.0005 13.0391 21.7898 13.4142 21.4147C13.7893 21.0396 14 20.5309 14 20.0005C14 19.47 13.7893 18.9613 13.4142 18.5863C13.0391 18.2112 12.5304 18.0005 12 18.0005Z" />
    </Svg>
  );
};
