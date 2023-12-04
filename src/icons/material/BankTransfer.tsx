import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BankTransferIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 14V11H18V9L22 12.5L18 16V14H15ZM14 7.7V9H2V7.7L8 4L14 7.7ZM7 10H9V15H7V10ZM3 10H5V15H3V10ZM13 10V12.5L11 14.3V10H13ZM9.1 16L8.5 16.5L10.2 18H2V16H9.1ZM17 15V18H14V20L10 16.5L14 13V15H17Z" />
    </Svg>
  );
};
