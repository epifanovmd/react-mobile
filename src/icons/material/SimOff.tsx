import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SimOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.84 22.7305L19.46 21.3505C19.1 21.7505 18.58 22.0005 18 22.0005H5.99999C4.88999 22.0005 3.99999 21.1105 3.99999 20.0005V8.00047L5.05999 6.95047L1.10999 3.00047L2.38999 1.73047L22.11 21.4605L20.84 22.7305ZM20 4.00047C20 2.90047 19.11 2.00047 18 2.00047H9.99999L7.59999 4.40047L20 16.8005V4.00047Z" />
    </Svg>
  );
};
