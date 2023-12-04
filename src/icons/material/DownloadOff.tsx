import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DownloadOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20.8401 22.7305L18.1101 20.0005H5.00011V18.0005H16.1101L13.0601 14.9505L12.0001 16.0005L5.00011 9.00047H7.11011L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605L20.8401 22.7305ZM19.0001 9.00047H15.0001V3.00047H9.00011V5.80047L15.6001 12.4005L19.0001 9.00047Z" />
    </Svg>
  );
};
