import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DistributeHorizontalCenterIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 2V5H10V19H8V22H6V19H4V5H6V2H8ZM16 2V7H14V17H16V22H18V17H20V7H18V2H16Z" />
    </Svg>
  );
};
