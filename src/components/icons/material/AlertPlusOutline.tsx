import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const AlertPlusOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 15.5H13V17.5H11V15.5ZM14 19C14 18.86 14 18.73 14 18.6H5.4L12 7.29999L16.11 14.44C16.62 14 17.2 13.65 17.84 13.41L12 3.29999L2 20.6H14.22C14.08 20.09 14 19.56 14 19ZM13 10.5H11V14.5H13V10.5ZM19 15V18H16V20H19V23H21V20H24V18H21V15H19Z" />
    </Svg>
  );
};
