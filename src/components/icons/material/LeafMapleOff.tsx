import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LeafMapleOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.1101 14.9105L8.20011 5.00047H10.0001L12.0001 2.00047L14.0001 5.00047H16.0001L14.3701 9.90047L17.7901 6.00047L18.7901 7.73047L22.3901 7.96047L20.7901 11.1905L21.7901 13.0005L18.1101 14.9105ZM2.39011 1.73047L1.11011 3.00047L5.45011 7.34047L5.21011 7.77047L1.61011 8.00047L3.21011 11.2705L2.21011 13.0005L8.00011 16.0005L7.00011 18.0005L11.0001 17.2505V21.0005H13.0001V17.2505L15.9101 17.8005L20.8401 22.7305L22.1101 21.4605L2.39011 1.73047Z" />
    </Svg>
  );
};
