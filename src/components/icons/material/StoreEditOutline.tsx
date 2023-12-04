import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const StoreEditOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M20 6H4V4H20V6ZM14 16.13L11 19.13V20H4V14H3V12L4 7H20L20.61 10.07C20.16 10.17 19.73 10.4 19.39 10.74L18.82 11.31L18.36 9H5.64L5.04 12H18.13L16.13 14H14V16.13ZM12 14H6V18H12V14ZM22.85 13.47L21.53 12.15C21.33 11.95 21 11.95 20.81 12.15L19.83 13.13L21.87 15.17L22.85 14.19C23.05 14 23.05 13.67 22.85 13.47ZM13 19.96V22H15.04L21.17 15.88L19.13 13.83L13 19.96Z" />
    </Svg>
  );
};
