import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const CellphoneBasicIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M15 2C14.7348 2 14.4804 2.10536 14.2929 2.29289C14.1054 2.48043 14 2.73478 14 3V6H10C8.89 6 8 6.89 8 8V20C8 21.11 8.89 22 10 22H15C16.11 22 17 21.11 17 20V8C17 7.26 16.6 6.62 16 6.28V3C16 2.73478 15.8946 2.48043 15.7071 2.29289C15.5196 2.10536 15.2652 2 15 2ZM10 8H15V13H10V8ZM10 15H11V16H10V15ZM12 15H13V16H12V15ZM14 15H15V16H14V15ZM10 17H11V18H10V17ZM12 17H13V18H12V17ZM14 17H15V18H14V17ZM10 19H11V20H10V19ZM12 19H13V20H12V19ZM14 19H15V20H14V19Z" />
    </Svg>
  );
};
