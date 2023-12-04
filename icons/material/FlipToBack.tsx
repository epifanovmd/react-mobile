import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const FlipToBackIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 17H17V15H15V17ZM15 5H17V3H15V5ZM5 7H3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H17V19H5V7ZM19 17C19.5304 17 20.0391 16.7893 20.4142 16.4142C20.7893 16.0391 21 15.5304 21 15H19V17ZM19 9H21V7H19V9ZM19 13H21V11H19V13ZM9 17V15H7C7 15.5304 7.21071 16.0391 7.58579 16.4142C7.96086 16.7893 8.46957 17 9 17ZM13 3H11V5H13V3ZM19 3V5H21C21 3.89 20.1 3 19 3ZM13 15H11V17H13V15ZM9 3C7.89 3 7 3.89 7 5H9V3ZM9 11H7V13H9V11ZM9 7H7V9H9V7Z" />
    </Svg>
  );
};
