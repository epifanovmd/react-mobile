import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HomeExportOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M24 13L20 9V12H11V14H20V17L24 13ZM18 16V21H2V12H0L10 2L18 10H15L10 5L4 11V19H16V16H18Z" />
    </Svg>
  );
};
