import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const EmailOpenOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.03 6.28965L12 0.639648L2.97 6.28965C2.39 6.63965 2 7.26965 2 7.99965V17.9996C2 19.0996 2.9 19.9996 4 19.9996H20C21.1 19.9996 22 19.0996 22 17.9996V7.99965C22 7.26965 21.61 6.63965 21.03 6.28965ZM20 17.9996H4V9.99965L12 14.9996L20 9.99965V17.9996ZM12 12.9996L4 7.99965L12 2.99965L20 7.99965L12 12.9996Z" />
    </Svg>
  );
};
