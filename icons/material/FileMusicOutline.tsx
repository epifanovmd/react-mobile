import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FileMusicOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 2L20 8V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H14ZM18 20V9H13V4H6V20H18ZM13 10V12H11V17C11 17.5304 10.7893 18.0391 10.4142 18.4142C10.0391 18.7893 9.53043 19 9 19C8.46957 19 7.96086 18.7893 7.58579 18.4142C7.21071 18.0391 7 17.5304 7 17C7 16.4696 7.21071 15.9609 7.58579 15.5858C7.96086 15.2107 8.46957 15 9 15C9.4 15 9.7 15.1 10 15.3V10H13Z" />
    </Svg>
  );
};
