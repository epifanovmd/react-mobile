import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StoreAlertOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 7L1 12V14H2V20H12V14H16V20H18V14H19V12L18 7H2ZM10 18H4V14H10V18ZM3.04 12L3.64 9H16.36L16.96 12H3.04ZM18 6H2V4H18V6ZM23 7V13H21V7H23ZM21 15H23V17H21V15Z" />
    </Svg>
  );
};