import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RouterWirelessSettingsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M20.2 4.9C19 3.8 17.5 3.2 16 3.2C14.5 3.2 13 3.8 11.8 4.9L11 4.1C12.4 2.7 14.2 2 16 2C17.8 2 19.6 2.7 21 4.1L20.2 4.9ZM19.3 5.7L18.5 6.5C17.8 5.8 16.9 5.5 16 5.5C15.1 5.5 14.2 5.8 13.5 6.5L12.7 5.7C13.6 4.8 14.8 4.3 16 4.3C17.2 4.3 18.4 4.8 19.3 5.7ZM19 12C19.5304 12 20.0391 12.2107 20.4142 12.5858C20.7893 12.9609 21 13.4696 21 14V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V14C3 13.4696 3.21071 12.9609 3.58579 12.5858C3.96086 12.2107 4.46957 12 5 12H15V8H17V12H19ZM8 17V15H6V17H8ZM11.5 17V15H9.5V17H11.5ZM15 17V15H13V17H15ZM7 22H9V24H7V22ZM11 22H13V24H11V22ZM15 22H17V24H15V22Z" />
    </Svg>
  );
};
