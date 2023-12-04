import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ChartGanttIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 5H10V2H12V22H10V18H6V15H10V13H4V10H10V8H2V5ZM14 5H17V8H14V5ZM14 10H19V13H14V10ZM14 15H22V18H14V15Z" />
    </Svg>
  );
};
