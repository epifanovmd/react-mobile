import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PlaylistPlusIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 16H10V14H2V16ZM18 14V10H16V14H12V16H16V20H18V16H22V14H18ZM14 6H2V8H14V6ZM14 10H2V12H14V10Z" />
    </Svg>
  );
};
