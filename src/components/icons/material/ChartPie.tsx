import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ChartPieIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 2V22C5.9 21.5 2 17.2 2 12C2 6.8 5.9 2.5 11 2ZM13 2V11H22C21.5 6.2 17.8 2.5 13 2ZM13 13V22C17.7 21.5 21.5 17.8 22 13H13Z" />
    </Svg>
  );
};
