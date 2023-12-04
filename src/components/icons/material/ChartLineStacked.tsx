import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ChartLineStackedIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.45 15.18L22 6.81V19V21H2V3H4V15.54V19H4.31H6H6.57L10.96 11.44L17.45 15.18ZM22 3L21.97 3.45L17 11L10 6L6 12V3H22Z" />
    </Svg>
  );
};
