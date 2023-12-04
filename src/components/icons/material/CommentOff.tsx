import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CommentOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22.1101 21.4605L20.8401 22.7305L16.1101 18.0005H13.9001L10.2001 21.7105C10.0001 21.9005 9.75011 22.0005 9.50011 22.0005H9.00011C8.45011 22.0005 8.00011 21.5505 8.00011 21.0005V18.0005H4.00011C2.90011 18.0005 2.00011 17.1105 2.00011 16.0005V4.00047V3.90047L1.11011 3.00047L2.39011 1.73047L22.1101 21.4605ZM22.0001 16.0005V4.00047C22.0001 2.90047 21.1101 2.00047 20.0001 2.00047H5.20011L20.9501 17.7505C21.5701 17.4105 22.0001 16.7605 22.0001 16.0005Z" />
    </Svg>
  );
};
