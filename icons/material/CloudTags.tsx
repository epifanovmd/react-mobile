import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CloudTagsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 20C4.4087 20 2.88258 19.3679 1.75736 18.2426C0.632141 17.1174 0 15.5913 0 14C0 10.91 2.34 8.36 5.35 8.04C6.6 5.64 9.11 4 12 4C15.63 4 18.66 6.58 19.35 10C21.95 10.19 24 12.36 24 15C24 15.6566 23.8707 16.3068 23.6194 16.9134C23.3681 17.52 22.9998 18.0712 22.5355 18.5355C22.0712 18.9998 21.52 19.3681 20.9134 19.6194C20.3068 19.8707 19.6566 20 19 20H6ZM9.09 8.4L4.5 13L9.09 17.6L10.5 16.18L7.32 13L10.5 9.82L9.09 8.4ZM14.91 8.4L13.5 9.82L16.68 13L13.5 16.18L14.91 17.6L19.5 13L14.91 8.4Z" />
    </Svg>
  );
};
