import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AlphaMIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M9 7C8.46957 7 7.96086 7.21071 7.58579 7.58579C7.21071 7.96086 7 8.46957 7 9V17H9V9H11V16H13V9H15V17H17V9C17 8.46957 16.7893 7.96086 16.4142 7.58579C16.0391 7.21071 15.5304 7 15 7H9Z" />
    </Svg>
  );
};
