import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PenRemoveIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.7 7.00094C20.4 7.40094 20 7.70094 20 8.00094C20 8.30094 20.3 8.60094 20.6 9.00094C21.1 9.50094 21.6 9.90094 21.5 10.4009C21.5 10.9009 21 11.4009 20.5 11.9009L16.4 16.0009L15 14.7009L19.2 10.5009L18.2 9.50094L16.8 10.9009L13 7.10094L17 3.30094C17.4 2.90094 18 2.90094 18.4 3.30094L20.7 5.60094C21.1 6.00094 21.1 6.70094 20.7 7.00094ZM2.99996 17.2009L12.6 7.60094L16.3 11.4009L6.79996 21.0009H2.99996V17.2009ZM3.87996 2.46094L5.99996 4.59094L8.11996 2.46094L9.53996 3.88094L7.40996 6.00094L9.53996 8.12094L8.11996 9.54094L5.99996 7.41094L3.87996 9.54094L2.45996 8.12094L4.58996 6.00094L2.45996 3.88094L3.87996 2.46094Z" />
    </Svg>
  );
};
