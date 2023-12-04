import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DeleteVariantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.03 3L18 20.31C17.83 21.27 17 22 16 22H7.99997C6.99997 22 6.16997 21.27 5.99997 20.31L2.96997 3H21.03ZM5.35997 5L7.99997 20H16L18.64 5H5.35997ZM8.99997 18V14H13V18H8.99997ZM13 13.18L9.81997 10L13 6.82L16.18 10L13 13.18Z" />
    </Svg>
  );
};
