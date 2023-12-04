import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const NeedleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.1501 15.18L9.73008 13.77L11.1501 12.35L12.5601 13.77L13.9701 12.35L12.5601 10.94L13.9701 9.53L15.3901 10.94L16.8001 9.53L13.9701 6.7L6.90008 13.77L9.73008 16.6L11.1501 15.18ZM3.08008 19L6.20008 15.89L4.08008 13.77L13.9701 3.87L16.1001 6L17.5001 4.58L16.1001 3.16L17.5001 1.75L21.7501 6L20.3401 7.4L18.9201 6L17.5001 7.4L19.6301 9.53L9.73008 19.42L7.61008 17.3L3.08008 21.84V19Z" />
    </Svg>
  );
};
