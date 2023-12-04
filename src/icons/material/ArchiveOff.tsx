import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArchiveOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M10.2 6.99998L6.19999 2.99998H21V6.99998H10.2ZM20 7.99998H11.2L20 16.8V7.99998ZM20 19.35V19.34L8.65999 7.99998L7.65999 6.99998L2.38999 1.72998L1.10999 2.99998L2.99999 4.88998V6.99998H5.10999L6.10999 7.99998H3.99999V21H19.11L20.84 22.73L22.11 21.46L20 19.35Z" />
    </Svg>
  );
};
