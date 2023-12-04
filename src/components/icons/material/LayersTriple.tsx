import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LayersTripleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 0L3 7L4.63 8.27L12 14L19.36 8.27L21 7L12 0ZM19.37 10.73L12 16.47L4.62 10.74L3 12L12 19L21 12L19.37 10.73ZM19.37 15.73L12 21.47L4.62 15.74L3 17L12 24L21 17L19.37 15.73Z" />
    </Svg>
  );
};
