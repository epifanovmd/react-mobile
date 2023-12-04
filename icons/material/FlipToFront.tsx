import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FlipToFrontIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M7 21H9V19H7V21ZM11 21H13V19H11V21ZM19 15H9V5H19V15ZM19 3H9C7.89 3 7 3.89 7 5V15C7 15.5304 7.21071 16.0391 7.58579 16.4142C7.96086 16.7893 8.46957 17 9 17H14H18H19C19.5304 17 20.0391 16.7893 20.4142 16.4142C20.7893 16.0391 21 15.5304 21 15V5C21 3.89 20.1 3 19 3ZM15 21H17V19H15V21ZM3 9H5V7H3V9ZM5 21V19H3C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21ZM3 17H5V15H3V17ZM3 13H5V11H3V13Z" />
    </Svg>
  );
};
