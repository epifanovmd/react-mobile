import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DoorSlidingOpenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 11V13H4V11H6ZM22 5H17V19H22V5ZM7 5H2V19H7V5ZM22 3C23.11 3 24 3.89 24 5V21H0V5C0 3.89 0.894 3 2 3H9V19H15V3H22ZM20 11H18V13H20V11Z" />
    </Svg>
  );
};
