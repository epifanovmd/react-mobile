import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ArrowVerticalLockIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18.8 11V9.5C18.8 8.1 17.4 7 16 7C14.6 7 13.2 8.1 13.2 9.5V11C12.6 11 12 11.6 12 12.2V15.7C12 16.4 12.6 17 13.2 17H18.7C19.4 17 20 16.4 20 15.8V12.3C20 11.6 19.4 11 18.8 11ZM17.5 11H14.5V9.5C14.5 8.7 15.2 8.2 16 8.2C16.8 8.2 17.5 8.7 17.5 9.5V11ZM9 6H12L8 2L4 6H7V18H4L8 22L12 18H9V6Z" />
    </Svg>
  );
};
