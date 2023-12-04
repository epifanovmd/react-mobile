import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FireHydrantIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M5 15V14H4V12H5V11H7V15H5ZM19 12V11H17V15H19V14H20V12H19ZM18 6H15.86C15.5 4.6 14.4 3.5 13 3.14V2H11V3.14C9.6 3.5 8.5 4.6 8.14 6H6V8H18V6ZM18 22H6C6 20.9 6.9 20 8 20V9H16V20C17.11 20 18 20.9 18 22ZM10 13C10 14.11 10.9 15 12 15C13.1 15 14 14.11 14 13C14 11.89 13.11 11 12 11C10.89 11 10 11.9 10 13Z" />
    </Svg>
  );
};
