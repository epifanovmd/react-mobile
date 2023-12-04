import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const UploadLockOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 22H17C16.5 22 16 21.5 16 21V17C16 16.5 16.5 16 17 16V14.5C17 13.1 18.1 12 19.5 12C20.9 12 22 13.1 22 14.5V16C22.5 16 23 16.5 23 17V21C23 21.5 22.5 22 22 22ZM5 18H14V20H5V18ZM21 16V14.5C21 13.7 20.3 13 19.5 13C18.7 13 18 13.7 18 14.5V16H21ZM9 16V10H5L12 3L19 10H15V16H9ZM9.83 8H11V14H13V8H14.17L12 5.83L9.83 8Z" />
    </Svg>
  );
};
