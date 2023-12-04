import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BankTransferOutIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 15V12H18V10L22 13.5L18 17V15H15ZM14 8.7V10H2V8.7L8 5L14 8.7ZM2 17H14V19H2V17ZM7 11H9V16H7V11ZM3 11H5V16H3V11ZM11 11H13V16H11V11Z" />
    </Svg>
  );
};
