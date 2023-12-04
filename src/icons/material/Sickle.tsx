import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SickleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.3 7.2C17.5 4.7 14.9 3 12 2C26.2 10.5 15.4 22.9 8.50005 15.5L5.90005 16L2.50005 19.4C1.90005 20 1.90005 21 2.50005 21.5C3.10005 22.1 4.10005 22.1 4.60005 21.5L7.80005 18.3C15.3 24.3 25 15 19.3 7.2Z" />
    </Svg>
  );
};
