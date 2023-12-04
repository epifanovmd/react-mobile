import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HandBackRightIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M13 24C9.73998 24 6.80998 22 5.59998 19L2.56998 11.37C2.25998 10.58 2.99998 9.79 3.80998 10.05L4.59998 10.31C5.15998 10.5 5.61998 10.92 5.83998 11.47L7.24998 15H7.99998V3.25C7.99998 2.56 8.55998 2 9.24998 2C9.93998 2 10.5 2.56 10.5 3.25V12H11.5V1.25C11.5 0.56 12.06 0 12.75 0C13.44 0 14 0.56 14 1.25V12H15V2.75C15 2.06 15.56 1.5 16.25 1.5C16.94 1.5 17.5 2.06 17.5 2.75V12H18.5V5.75C18.5 5.06 19.06 4.5 19.75 4.5C20.44 4.5 21 5.06 21 5.75V16C21 20.42 17.42 24 13 24Z" />
    </Svg>
  );
};
