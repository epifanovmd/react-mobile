import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ProjectorScreenOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 14.8905V16.5905L17.21 20.7905L15.79 22.2105L13 19.4105V22.0005H11V19.4105L8.20999 22.2105L6.78999 20.7905L11 16.5905V14.0005H4.99999V6.89047L1.10999 3.00047L2.38999 1.73047L22.11 21.4605L20.84 22.7305L13 14.8905ZM19 14.0005V5.00047H20C20.55 5.00047 21 4.55047 21 4.00047V3.00047C21 2.45047 20.55 2.00047 20 2.00047H5.19999L17.2 14.0005H19Z" />
    </Svg>
  );
};
