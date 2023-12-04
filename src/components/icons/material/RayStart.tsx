import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const RayStartIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 9C5.31 9 6.42 9.83 6.83 11H22V13H6.83C6.42 14.17 5.31 15 4 15C3.20435 15 2.44129 14.6839 1.87868 14.1213C1.31607 13.5587 1 12.7956 1 12C1 11.2044 1.31607 10.4413 1.87868 9.87868C2.44129 9.31607 3.20435 9 4 9Z" />
    </Svg>
  );
};
