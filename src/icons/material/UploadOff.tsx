import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UploadOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.1101 21.4605L2.39011 1.73047L1.11011 3.00047L6.56011 8.45047L5.00011 10.0005H8.11011L9.00011 10.8905V16.0005H14.1101L16.1101 18.0005H5.00011V20.0005H18.1101L20.8401 22.7305L22.1101 21.4605ZM15.0001 10.0005H19.0001L12.0001 3.00047L9.10011 5.90047L15.0001 11.8005V10.0005Z" />
    </Svg>
  );
};
