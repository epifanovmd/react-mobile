import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CameraMeteringPartialIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V6C2 5.46957 2.21071 4.96086 2.58579 4.58579C2.96086 4.21071 3.46957 4 4 4ZM4 6V18H20V6H4ZM12 7.5C14.14 7.5 15.93 9 16.39 11H14.83C14.42 9.83 13.31 9 12 9C10.69 9 9.58 9.83 9.17 11H7.61C8.07 9 9.86 7.5 12 7.5ZM12 16.5C9.86 16.5 8.07 15 7.61 13H9.17C9.58 14.17 10.69 15 12 15C13.31 15 14.42 14.17 14.83 13H16.39C15.93 15 14.14 16.5 12 16.5Z" />
    </Svg>
  );
};
