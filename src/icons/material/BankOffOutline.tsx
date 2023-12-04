import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BankOffOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17 13.8V10H19V15.8L17 13.8ZM12 3.26L17.21 6H9.19999L11.2 8H21.5V6L12 1L6.88999 3.69L8.36999 5.17L12 3.26ZM4.99999 10V17H6.99999V10H4.99999ZM21.5 20.85V20.84L19.66 19H19.65L17.65 17H17.66L17 16.34V16.35L13 12.35V12.34L11 10.34V10.35L8.65999 8L2.38999 1.73L1.10999 3L3.55999 5.45L2.49999 6V8H6.10999L11 12.89V17H13V14.89L17.11 19H2.49999V21H19.11L20.84 22.73L22.11 21.46L21.5 20.85Z" />
    </Svg>
  );
};
