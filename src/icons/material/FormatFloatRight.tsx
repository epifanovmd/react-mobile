import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const FormatFloatRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M15 7H21V13H15V7ZM3 3H21V5H3V3ZM13 7V9H3V7H13ZM9 11V13H3V11H9ZM3 15H17V17H3V15ZM3 19H21V21H3V19Z" />
    </Svg>
  );
};
