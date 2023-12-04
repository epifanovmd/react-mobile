import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SortDescendingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 7H22L18 3L14 7H17V21H19V7ZM2 17H12V19H2V17ZM6 5V7H2V5H6ZM2 11H9V13H2V11Z" />
    </Svg>
  );
};
