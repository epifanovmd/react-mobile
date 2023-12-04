import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ContainStartIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 3H8V5H4V19H8V21H2V3ZM7 17V15H9V17H7ZM11 17V15H13V17H11ZM15 17V15H17V17H15Z" />
    </Svg>
  );
};
