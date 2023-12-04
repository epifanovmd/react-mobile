import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const VolumeVariantOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5.63997 3.64062L21.36 19.3606L19.95 20.7806L16 16.8306V20.0006L11 15.0006H6.99997V9.00062H8.16997L4.21997 5.05063L5.63997 3.64062ZM16 4.00062V11.1706L12.41 7.58062L16 4.00062Z" />
    </Svg>
  );
};
