import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MenuOpenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 15.61L19.59 17L14.58 12L19.59 7L21 8.39L17.44 12L21 15.61ZM3 6H16V8H3V6ZM3 13V11H13V13H3ZM3 18V16H16V18H3Z" />
    </Svg>
  );
};
