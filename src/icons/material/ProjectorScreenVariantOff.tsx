import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ProjectorScreenVariantOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.84 22.7305L16.11 18.0005H4.99999V9.00047H3.99999C3.44999 9.00047 2.99999 8.55047 2.99999 8.00047V7.00047C2.99999 6.45047 3.44999 6.00047 3.99999 6.00047H4.10999L1.10999 3.00047L2.38999 1.73047L22.11 21.4605L20.84 22.7305ZM19 9.00047H20C20.55 9.00047 21 8.55047 21 8.00047V7.00047C21 6.45047 20.55 6.00047 20 6.00047H9.19999L19 15.8005V9.00047Z" />
    </Svg>
  );
};
