import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const UploadOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 10V16H15V10H19L12 3L5 10H9ZM12 5.8L14.2 8H13V14H11V8H9.8L12 5.8ZM19 18H5V20H19V18Z" />
    </Svg>
  );
};
