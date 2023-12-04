import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlertOctagramOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2.19995 16.06L3.87995 12L2.19995 7.94001L6.25995 6.26001L7.93995 2.20001L12 3.88001L16.06 2.20001L17.74 6.26001L21.7999 7.94001L20.12 12L21.7999 16.06L17.74 17.74L16.06 21.8L12 20.12L7.93995 21.8L6.25995 17.74L2.19995 16.06ZM4.80995 9.00001L6.04995 12L4.80995 15L7.78995 16.21L8.99995 19.19L12 17.95L15 19.19L16.21 16.21L19.19 15L17.95 12L19.19 9.00001L16.21 7.79001L15 4.81001L12 6.05001L8.99995 4.81001L7.78995 7.79001L4.80995 9.00001ZM11 15H13V17H11V15ZM11 7.00001H13V13H11V7.00001Z" />
    </Svg>
  );
};
