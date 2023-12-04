import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GiftIcon: FC<FlexSvgProps> = ({
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
      <Path d="M9.06 1.92973C7.17 1.91973 5.33 3.73973 6.17 5.99973H3C2.46957 5.99973 1.96086 6.21044 1.58579 6.58552C1.21071 6.96059 1 7.4693 1 7.99973V9.99973C1 10.2649 1.10536 10.5193 1.29289 10.7068C1.48043 10.8944 1.73478 10.9997 2 10.9997H11V7.99973H13V10.9997H22C22.2652 10.9997 22.5196 10.8944 22.7071 10.7068C22.8946 10.5193 23 10.2649 23 9.99973V7.99973C23 7.4693 22.7893 6.96059 22.4142 6.58552C22.0391 6.21044 21.5304 5.99973 21 5.99973H17.83C19 2.72973 14.6 0.419729 12.57 3.23973L12 3.99973L11.43 3.21973C10.8 2.32973 9.93 1.93973 9.06 1.92973ZM9 3.99973C9.89 3.99973 10.34 5.07973 9.71 5.70973C9.08 6.33973 8 5.88973 8 4.99973C8 4.73451 8.10536 4.48016 8.29289 4.29262C8.48043 4.10509 8.73478 3.99973 9 3.99973ZM15 3.99973C15.89 3.99973 16.34 5.07973 15.71 5.70973C15.08 6.33973 14 5.88973 14 4.99973C14 4.73451 14.1054 4.48016 14.2929 4.29262C14.4804 4.10509 14.7348 3.99973 15 3.99973ZM2 11.9997V19.9997C2 20.5302 2.21071 21.0389 2.58579 21.4139C2.96086 21.789 3.46957 21.9997 4 21.9997H20C20.5304 21.9997 21.0391 21.789 21.4142 21.4139C21.7893 21.0389 22 20.5302 22 19.9997V11.9997H13V19.9997H11V11.9997H2Z" />
    </Svg>
  );
};
