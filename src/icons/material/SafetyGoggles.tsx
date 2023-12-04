import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SafetyGogglesIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18 9C19.11 9 20 9.89 20 11V14C20 15.11 19.11 16 18 16H15.77L14.53 14.77C13.78 14 12.77 13.6 11.7 13.6C10.63 13.6 9.63 14 8.87 14.77L7.64 16H6C4.89 16 4 15.11 4 14V11C4 9.89 4.89 9 6 9H18ZM18 7H6C4.93913 7 3.92172 7.42143 3.17157 8.17157C2.42143 8.92172 2 9.93913 2 11H1V14H2C2 15.0609 2.42143 16.0783 3.17157 16.8284C3.92172 17.5786 4.93913 18 6 18H8.5C8.54 17.94 8.59 17.88 10.29 16.18C10.68 15.79 11.19 15.6 11.7 15.6C12.22 15.6 12.73 15.79 13.12 16.18L14.91 18H18C19.0609 18 20.0783 17.5786 20.8284 16.8284C21.5786 16.0783 22 15.0609 22 14H23V11H22C22 9.93913 21.5786 8.92172 20.8284 8.17157C20.0783 7.42143 19.0609 7 18 7Z" />
    </Svg>
  );
};
