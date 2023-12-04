import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PlaylistStarIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17 19.09L19.45 20.58L18.8 17.77L21 15.89L18.11 15.64L17 13L15.87 15.64L13 15.89L15.18 17.77L14.5 20.58L17 19.09ZM4 14H12V16H4V14ZM4 6H16V8H4V6ZM4 10H16V12H4V10Z" />
    </Svg>
  );
};
