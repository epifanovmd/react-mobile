import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FileLinkIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2ZM11 20H10C8.39 20 6 18.94 6 16C6 13.07 8.39 12 10 12H11V14H10C9.54 14 8 14.17 8 16C8 17.9 9.67 18 10 18H11V20ZM15 15V17H9V15H15ZM14 20H13V18H14C14.46 18 16 17.83 16 16C16 14.1 14.33 14 14 14H13V12H14C15.61 12 18 13.07 18 16C18 18.94 15.61 20 14 20ZM13 9V3.5L18.5 9H13Z" />
    </Svg>
  );
};
