import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StoreOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2.39011 1.73047L1.11011 3.00047L5.11011 7.00047H4.00011L3.00011 12.0005V14.0005H4.00011V20.0005H14.0001V15.8905L20.8401 22.7305L22.1101 21.4605L2.39011 1.73047ZM5.64011 9.00047H7.11011L10.1101 12.0005H5.04011L5.64011 9.00047ZM12.0001 18.0005H6.00011V14.0005H12.0001V18.0005ZM18.0001 14.8005V14.0005H17.2001L15.2001 12.0005H18.9601L18.3601 9.00047H12.2001L10.2001 7.00047H20.0001L21.0001 12.0005V14.0005H20.0001V16.8005L18.0001 14.8005ZM9.20011 6.00047L7.20011 4.00047H20.0001V6.00047H9.20011Z" />
    </Svg>
  );
};
