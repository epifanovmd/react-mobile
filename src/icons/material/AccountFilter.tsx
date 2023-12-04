import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AccountFilterIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10 4C12.2 4 14 5.8 14 8C14 10.2 12.2 12 10 12C7.8 12 6 10.2 6 8C6 5.8 7.8 4 10 4ZM17 21L18.8 22.8C19.3 23.3 20 22.9 20 22.3V18L22.8 14.6C23.3 13.9 22.8 13 22 13H15C14.2 13 13.7 14 14.2 14.6L17 18V21ZM15 18.7L12.7 15.9C12.3 15.4 12.1 14.8 12.1 14.2C11.4 14 10.7 14 10 14C5.6 14 2 15.8 2 18V20H15V18.7Z" />
    </Svg>
  );
};
