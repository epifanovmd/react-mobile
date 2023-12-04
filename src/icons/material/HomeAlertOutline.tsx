import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HomeAlertOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 5.7L17 10.2V18H7V10.2L12 5.7ZM19 20V12H22L12 3L2 12H5V20H19ZM13 8H11V13H13V8ZM13 15H11V17H13V15Z" />
    </Svg>
  );
};
