import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BackspaceReverseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M2 21H17C17.7 21 18.2 20.6 18.6 20.1L24 12L18.6 3.9C18.2 3.4 17.7 3 17 3H2C1.46957 3 0.960859 3.21071 0.585786 3.58579C0.210714 3.96086 0 4.46957 0 5L0 19C0 19.5304 0.210714 20.0391 0.585786 20.4142C0.960859 20.7893 1.46957 21 2 21ZM5 8.4L6.4 7L10 10.6L13.6 7L15 8.4L11.4 12L15 15.6L13.6 17L10 13.4L6.4 17L5 15.6L8.6 12" />
    </Svg>
  );
};
