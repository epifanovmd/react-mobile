import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const PencilRemoveOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M17.7 3C17.5 3 17.2 3.1 17 3.3L15.2 5.1L18.9 8.9L20.7 7C21.1 6.6 21.1 6 20.7 5.6L18.4 3.3C18.2 3.1 17.9 3 17.7 3ZM14.1 6.2L3 17.2V21H6.8L17.8 9.9L14.1 6.2ZM5.9 19H5V18.1L14.1 9L15 9.9L5.9 19ZM3.9 2.5L6 4.6L8.1 2.5L9.5 3.9L7.4 6L9.5 8.1L8.1 9.5L6 7.4L3.9 9.5L2.5 8.1L4.6 6L2.5 3.9L3.9 2.5Z" />
    </Svg>
  );
};
