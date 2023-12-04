import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PlusCircleMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 12C2 9.2 3.6 6.8 6 5.7V3.5C2.5 4.8 0 8.1 0 12C0 15.9 2.5 19.2 6 20.5V18.3C3.6 17.2 2 14.8 2 12ZM15 3C10 3 6 7 6 12C6 17 10 21 15 21C20 21 24 17 24 12C24 7 20 3 15 3ZM20 13H16V17H14V13H10V11H14V7H16V11H20V13Z" />
    </Svg>
  );
};
