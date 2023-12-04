import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CityIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M19 15H17V13H19V15ZM19 19H17V17H19V19ZM13 7H11V5H13V7ZM13 11H11V9H13V11ZM13 15H11V13H13V15ZM13 19H11V17H13V19ZM7 11H5V9H7V11ZM7 15H5V13H7V15ZM7 19H5V17H7V19ZM15 11V5L12 2L9 5V7H3V21H21V11H15Z" />
    </Svg>
  );
};
