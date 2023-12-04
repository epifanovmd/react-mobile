import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const SshIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4.5 9C3.9 9 3.5 9.5 3.5 10V11.75C3.5 12.25 3.9 12.75 4.5 12.75H7V13.5H3.5V15H7.5C8.1 15 8.5 14.5 8.5 14V12.25C8.5 11.75 8.1 11.25 7.5 11.25H5V10.5H8.5V9H4.5ZM10.5 9C9.9 9 9.5 9.5 9.5 10V11.75C9.5 12.25 9.9 12.75 10.5 12.75H13V13.5H9.5V15H13.5C14.1 15 14.5 14.5 14.5 14V12.25C14.5 11.75 14.1 11.25 13.5 11.25H11V10.5H14.5V9H10.5ZM15.5 9V15H17V12.5H19V15H20.5V9H19V11H17V9H15.5Z" />
    </Svg>
  );
};
