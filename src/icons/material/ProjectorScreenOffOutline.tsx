import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ProjectorScreenOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.84 22.7305L22.11 21.4605L2.38999 1.73047L1.10999 3.00047L4.99999 6.89047V14.0005H11V16.5905L6.78999 20.7905L8.20999 22.2105L11 19.4105V22.0005H13V19.4105L15.79 22.2105L17.21 20.7905L13 16.5905V14.8905L20.84 22.7305ZM6.99999 12.0005V8.89047L10.11 12.0005H6.99999ZM8.19999 5.00047L5.19999 2.00047H20C20.55 2.00047 21 2.45047 21 3.00047V4.00047C21 4.55047 20.55 5.00047 20 5.00047H19V14.0005H17.2L15.2 12.0005H17V5.00047H8.19999Z" />
    </Svg>
  );
};
