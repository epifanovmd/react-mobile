import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const DeskphoneIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3ZM15 5V19H19V5H15ZM5 5V9H13V5H5ZM5 11V13H7V11H5ZM8 11V13H10V11H8ZM11 11V13H13V11H11ZM5 14V16H7V14H5ZM8 14V16H10V14H8ZM11 14V16H13V14H11ZM11 17V19H13V17H11ZM8 17V19H10V17H8ZM5 17V19H7V17H5Z" />
    </Svg>
  );
};
