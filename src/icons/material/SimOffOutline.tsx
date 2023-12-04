import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SimOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22.11 21.4605L2.38999 1.73047L1.10999 3.00047L5.05999 6.95047L3.99999 8.00047V20.0005C3.99999 21.1105 4.88999 22.0005 5.99999 22.0005H18C18.58 22.0005 19.1 21.7505 19.46 21.3505L20.84 22.7305L22.11 21.4605ZM18 20.0005H5.99999V8.83047L6.46999 8.36047L18 19.8905V20.0005ZM10.83 4.00047H18V14.8005L20 16.8005V4.00047C20 2.90047 19.11 2.00047 18 2.00047H9.99999L7.59999 4.40047L8.99999 5.81047L10.83 4.00047Z" />
    </Svg>
  );
};
