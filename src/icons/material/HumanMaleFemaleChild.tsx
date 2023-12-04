import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const HumanMaleFemaleChildIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M16 4C16 2.9 16.9 2 18 2C19.1 2 20 2.9 20 4C20 5.1 19.1 6 18 6C16.9 6 16 5.1 16 4ZM20 22V16H22.5L20 8.4C19.7 7.6 19 7 18.1 7H18C17.1 7 16.4 7.6 16.1 8.4L15.2 11C16.3 11.6 17 12.7 17 14.1V22.1H20V22ZM12.5 11.5C13.3 11.5 14 10.8 14 10C14 9.2 13.3 8.5 12.5 8.5C11.7 8.5 11 9.2 11 10C11 10.8 11.7 11.5 12.5 11.5ZM5.5 6C6.6 6 7.5 5.1 7.5 4C7.5 2.9 6.6 2 5.5 2C4.4 2 3.5 2.9 3.5 4C3.5 5.1 4.4 6 5.5 6ZM7.5 22V15H9V9C9 7.9 8.1 7 7 7H4C2.9 7 2 7.9 2 9V15H3.5V22H7.5ZM14 22V18H15V14C15 13.2 14.3 12.5 13.5 12.5H11.5C10.7 12.5 10 13.2 10 14V18H11V22H14Z" />
    </Svg>
  );
};
