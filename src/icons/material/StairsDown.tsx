import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StairsDownIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 6.00008H22V9.00008H18V13.0001H14V17.0001H10V21.0001H3V18.0001H7V14.0001H11V10.0001H15V6.00008ZM4.83 8.34008L10.34 2.83008L12.17 4.66008L6.66 10.1701L8.5 12.0001H3V6.50008L4.83 8.34008Z" />
    </Svg>
  );
};
