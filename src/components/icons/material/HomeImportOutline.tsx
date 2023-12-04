import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HomeImportOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 13L11 9V12H2V14H11V17L15 13ZM22 12H20V21H4V16H6V19H18V11L12 5L7 10H4L12 2L22 12Z" />
    </Svg>
  );
};
