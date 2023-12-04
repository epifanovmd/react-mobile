import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const InboxRemoveOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 19V17H8.1C8.3 17.8 8.8 18.5 9.4 19H5ZM19 19H14.6C15.2 18.5 15.7 17.8 15.9 17H19V19ZM19 15H14V16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16V15H5V5H19V15ZM14.1 6.5L15.5 7.9L13.4 10L15.5 12.1L14.1 13.5L12 11.4L9.9 13.5L8.5 12.1L10.6 10L8.5 7.9L9.9 6.5L12 8.6L14.1 6.5Z" />
    </Svg>
  );
};
