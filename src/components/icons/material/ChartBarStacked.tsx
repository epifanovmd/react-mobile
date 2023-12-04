import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ChartBarStackedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21ZM18 14H22V16H18V14ZM12 6H16V9H12V6ZM16 15H12V10H16V15ZM6 10H10V12H6V10ZM10 16H6V13H10V16Z" />
    </Svg>
  );
};
