import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SlopeUphillIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 13.0009V22.0009H2V19.0009L22 13.0009ZM21.68 7.06094L16.86 4.46094L17.7 7.24094L7.58 10.2409C6.63 8.95094 4.82 8.67094 3.53 9.62094C2.24 10.5709 1.96 12.3809 2.91 13.6709C3.85 14.9709 5.67 15.2409 6.96 14.2909C7.67 13.7809 8.1 12.9709 8.14 12.0909L18.26 9.09094L19.1 11.8709L21.68 7.06094Z" />
    </Svg>
  );
};
