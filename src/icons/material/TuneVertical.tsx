import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TuneVerticalIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M7 3H5V9H7V3ZM19 3H17V13H19V3ZM3 13H5V21H7V13H9V11H3V13ZM15 7H13V3H11V7H9V9H15V7ZM11 21H13V11H11V21ZM15 15V17H17V21H19V17H21V15H15Z" />
    </Svg>
  );
};
