import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ViewSplitVerticalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 5H21V19H13V5ZM3 5H11V7H3V5ZM3 11V9H11V11H3ZM3 19V17H11V19H3ZM3 15V13H11V15H3Z" />
    </Svg>
  );
};
