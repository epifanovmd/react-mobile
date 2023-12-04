import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PotMixIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14.6 8.99961L18 3.09961L19.7 4.09961L16.9 8.99961H14.6ZM14 9.99961H3V11.9996H5V18.9996C5 20.0996 5.9 20.9996 7 20.9996H17C18.1 20.9996 19 20.0996 19 18.9996V11.9996H21V9.99961H14Z" />
    </Svg>
  );
};
