import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatWrapTightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 7L17 17H7L12 7ZM3 3H21V5H3V3ZM3 7H9V9H3V7ZM21 7V9H15V7H21ZM3 11H7V13H3V11ZM21 11V13H17V11H21ZM3 15H6V17H3V15ZM21 15V17H18V15H21ZM3 19H21V21H3V19Z" />
    </Svg>
  );
};
