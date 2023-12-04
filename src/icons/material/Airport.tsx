import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AirportIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.97 5.92003C14.83 5.41003 14.3 5.10003 13.79 5.24003L10.39 6.15003L5.95 2.03003L4.72 2.36003L7.38 6.95003L4.19 7.80003L2.93 6.82003L2 7.07003L3.66 9.95003L14.28 7.11003C14.8 6.96003 15.1 6.43003 14.97 5.92003ZM21 10L20 12H15L14 10L15 9.00003H17V7.00003H18V9.00003H20L21 10ZM22 20V22H2V20H15V13H20V20H22Z" />
    </Svg>
  );
};
