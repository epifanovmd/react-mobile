import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SortAscendingIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 17H22L18 21L14 17H17V3H19V17ZM2 17H12V19H2V17ZM6 5V7H2V5H6ZM2 11H9V13H2V11Z" />
    </Svg>
  );
};
