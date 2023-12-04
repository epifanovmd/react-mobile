import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TableAlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3 4H17C18.11 4 19 4.89 19 6V18C19 19.11 18.11 20 17 20H3C1.9 20 1 19.11 1 18V6C1 4.89 1.9 4 3 4ZM3 8V12H9V8H3ZM11 8V12H17V8H11ZM3 14V18H9V14H3ZM11 14V18H17V14H11ZM23 7H21V13H23V7ZM23 15H21V17H23V15Z" />
    </Svg>
  );
};
