import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const LinkBoxOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM19 19H5V5H19V19ZM11 16H10C8.39 16 6 14.94 6 12C6 9.07 8.39 8 10 8H11V10H10C9.54 10 8 10.17 8 12C8 13.9 9.67 14 10 14H11V16ZM14 16H13V14H14C14.46 14 16 13.83 16 12C16 10.1 14.33 10 14 10H13V8H14C15.61 8 18 9.07 18 12C18 14.94 15.61 16 14 16ZM15 13H9V11H15V13Z" />
    </Svg>
  );
};
