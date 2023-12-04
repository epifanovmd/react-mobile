import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StoreOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9.20011 6.00047L7.20011 4.00047H20.0001V6.00047H9.20011ZM20.0001 16.8005V14.0005H21.0001V12.0005L20.0001 7.00047H10.2001L17.2001 14.0005H18.0001V14.8005L20.0001 16.8005ZM22.1101 21.4605L20.8401 22.7305L14.0001 15.8905V20.0005H4.00011V14.0005H3.00011V12.0005L4.00011 7.00047H5.11011L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605ZM12.0001 14.0005H6.00011V18.0005H12.0001V14.0005Z" />
    </Svg>
  );
};
