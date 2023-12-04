import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HomeAccountIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 3L2 12H5V20H19V12H22L12 3ZM12 8.75C12.5967 8.75 13.169 8.98705 13.591 9.40901C14.0129 9.83097 14.25 10.4033 14.25 11C14.25 11.5967 14.0129 12.169 13.591 12.591C13.169 13.0129 12.5967 13.25 12 13.25C11.4033 13.25 10.831 13.0129 10.409 12.591C9.98705 12.169 9.75 11.5967 9.75 11C9.75 10.4033 9.98705 9.83097 10.409 9.40901C10.831 8.98705 11.4033 8.75 12 8.75ZM12 15C13.5 15 16.5 15.75 16.5 17.25V18H7.5V17.25C7.5 15.75 10.5 15 12 15Z" />
    </Svg>
  );
};
