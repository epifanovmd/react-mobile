import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TableBorderIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21 19C21 19.2652 20.8946 19.5196 20.7071 19.7071C20.5196 19.8946 20.2652 20 20 20H19V18H21V19ZM15 20V18H17V20H15ZM11 20V18H13V20H11ZM7 20V18H9V20H7ZM4 20C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V18H5V20H4ZM19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V8H5H11H13H19H21V6C21 4.89 20.11 4 19 4ZM5 14H3V16H5V14ZM5 10H3V12H5V10ZM21 10H19V12H21V10ZM21 14H19V16H21V14ZM11 16V14H13V16H11ZM11 12V10H13V12H11Z" />
    </Svg>
  );
};
