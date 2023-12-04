import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FileTableBoxMultipleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M3 5V21H19V23H3C1.9 23 1 22.1 1 21V5H3ZM21 1H7C5.89 1 5 1.89 5 3V17C5 18.1 5.9 19 7 19H21C22.11 19 23 18.11 23 17V3C23 1.9 22.1 1 21 1ZM21 17H7V3H21V17ZM11 14H8V16H11V14ZM15 14H12V16H15V14ZM11 11H8V13H11V11ZM15 11H12V13H15V11ZM11 8H8V10H11V8ZM15 8H12V10H15V8Z" />
    </Svg>
  );
};
