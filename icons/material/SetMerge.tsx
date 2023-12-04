import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SetMergeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 7V9H7V7H2ZM12 9V11H9V13H12V15L15 12L12 9ZM17 9V15H22V9H17ZM2 11V13H7V11H2ZM2 15V17H7V15H2Z" />
    </Svg>
  );
};
