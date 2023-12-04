import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FolderMultipleOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 4C22.5304 4 23.0391 4.21071 23.4142 4.58579C23.7893 4.96086 24 5.46957 24 6V16C24 16.5304 23.7893 17.0391 23.4142 17.4142C23.0391 17.7893 22.5304 18 22 18H6C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H12L14 4H22ZM2 6V20H20V22H2C1.46957 22 0.960859 21.7893 0.585786 21.4142C0.210714 21.0391 0 20.5304 0 20V11V6H2ZM6 6V16H22V6H6Z" />
    </Svg>
  );
};
