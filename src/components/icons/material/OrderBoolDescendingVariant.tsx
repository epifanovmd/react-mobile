import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const OrderBoolDescendingVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 3C2.89 3 2 3.89 2 5V9C2 10.11 2.89 11 4 11H8C9.11 11 10 10.11 10 9V5C10 3.89 9.11 3 8 3H4ZM8.2 4.5L9.26 5.55L5.27 9.5L2.74 6.95L3.81 5.9L5.28 7.39L8.2 4.5ZM4 13C2.89 13 2 13.89 2 15V19C2 20.11 2.89 21 4 21H8C9.11 21 10 20.11 10 19V15C10 13.89 9.11 13 8 13H4ZM4 15H8V19H4V15ZM12 5H22V7H12V5ZM12 19V17H22V19H12ZM12 11H22V13H12V11Z" />
    </Svg>
  );
};
