import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AlphaAIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 7C10.4696 7 9.96086 7.21071 9.58579 7.58579C9.21071 7.96086 9 8.46957 9 9V17H11V13H13V17H15V9C15 8.46957 14.7893 7.96086 14.4142 7.58579C14.0391 7.21071 13.5304 7 13 7H11ZM11 9H13V11H11V9Z" />
    </Svg>
  );
};
