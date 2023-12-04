import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SelectOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1 4.27L2.28 3L21 21.72L19.73 23L17 20.27V21H15V19H15.73L5 8.27V9H3V7H3.73L1 4.27ZM20 3C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V5H19V3H20ZM15 5V3H17V5H15ZM11 5V3H13V5H11ZM7 5V3H9V5H7ZM11 21V19H13V21H11ZM7 21V19H9V21H7ZM4 21C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V19H5V21H4ZM3 15H5V17H3V15ZM21 15V17H19V15H21ZM3 11H5V13H3V11ZM21 11V13H19V11H21ZM21 7V9H19V7H21Z" />
    </Svg>
  );
};
