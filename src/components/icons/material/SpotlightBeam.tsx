import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SpotlightBeamIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9.00001 16.4998L9.91001 15.5898L15.13 20.7998L14.21 21.7098L9.00001 16.4998ZM15.5 9.99977L16.41 9.08977L21.63 14.2998L20.71 15.2098L15.5 9.99977ZM6.72001 2.71977L10.15 6.14977L6.15001 10.1498L2.72001 6.71977C1.94001 5.93977 1.94001 4.66977 2.72001 3.88977L3.89001 2.71977C4.67001 1.93977 5.94001 1.93977 6.72001 2.71977ZM14.57 7.49977L15.28 8.20977L8.21001 15.2798L7.50001 14.5698L6.64001 11.0698L11.07 6.63977L14.57 7.49977Z" />
    </Svg>
  );
};
