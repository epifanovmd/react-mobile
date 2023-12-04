import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CeilingLightMultipleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M16.76 13L18.76 17H9.24L11.24 13H16.76ZM15 6H13V11H10L6 19H22L18 11H15V6ZM16 20C16 21.11 15.11 22 14 22C12.89 22 12 21.11 12 20H16ZM8.21 10.11L8.76 9H11V2H9V7H6L2 15H5.76L8.21 10.11Z" />
    </Svg>
  );
};
