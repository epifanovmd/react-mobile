import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const AlertDecagramIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M23 12L20.56 9.21998L20.9 5.53998L17.29 4.71998L15.4 1.53998L12 2.99998L8.6 1.53998L6.71 4.71998L3.1 5.52998L3.44 9.20998L1 12L3.44 14.78L3.1 18.47L6.71 19.29L8.6 22.47L12 21L15.4 22.46L17.29 19.28L20.9 18.46L20.56 14.78L23 12ZM13 17H11V15H13V17ZM13 13H11V6.99998H13V13Z" />
    </Svg>
  );
};
