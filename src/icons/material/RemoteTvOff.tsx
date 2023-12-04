import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RemoteTvOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 5.27L3.28 4L20 20.72L18.73 22L17 20.25C16.86 21.24 16 22 15 22H9C8.46957 22 7.96086 21.7893 7.58579 21.4142C7.21071 21.0391 7 20.5304 7 20V10.27L2 5.27ZM9 2H11V4H13V2H15C15.5304 2 16.0391 2.21071 16.4142 2.58579C16.7893 2.96086 17 3.46957 17 4V15.18L13 11.18V10H15V8H13V6H11V8H9.82L7 5.18V4C7 3.46957 7.21071 2.96086 7.58579 2.58579C7.96086 2.21071 8.46957 2 9 2ZM9 20H11V18H9V20ZM13 20H15V18.27L14.73 18H13V20ZM9 14V16H11V14.27L10.73 14H9Z" />
    </Svg>
  );
};
