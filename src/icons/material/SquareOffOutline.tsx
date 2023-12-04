import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SquareOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M22.1101 21.4605L2.39011 1.73047L1.11011 3.00047L3.00011 4.89047V21.0005H19.1101L20.8401 22.7305L22.1101 21.4605ZM5.00011 19.0005V6.89047L17.1101 19.0005H5.00011ZM8.20011 5.00047L6.20011 3.00047H21.0001V17.8005L19.0001 15.8005V5.00047H8.20011Z" />
    </Svg>
  );
};
