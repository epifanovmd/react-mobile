import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const LightbulbSpotOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.8401 22.7305L15.1101 17.0005H9.00011V14.0005C6.50011 12.5705 4.00011 11.0005 4.00011 6.00047V5.89047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605L20.8401 22.7305ZM22.0001 4.00047V2.00047H5.20011L7.20011 4.00047H22.0001ZM20.0001 6.00047H9.20011L16.3701 13.1705C18.3301 11.8705 20.0001 10.0705 20.0001 6.00047ZM13.0001 22.0005H15.0001V19.0005H13.0001V22.0005ZM9.00011 22.0005H11.0001V19.0005H9.00011V22.0005Z" />
    </Svg>
  );
};
