import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PodiumBronzeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 13.09L6.45 14.58L5.8 11.77L8 9.89L5.11 9.64L4 7L2.87 9.64L0 9.89L2.18 11.77L1.5 14.58L4 13.09ZM7 23H1V17H7V23ZM9 10V23H15V10H9ZM13 21H11V12H13V21ZM17 13V23H23V13H17ZM21 21H19V15H21V21Z" />
    </Svg>
  );
};
