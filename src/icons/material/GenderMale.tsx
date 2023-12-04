import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const GenderMaleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M9 9C10.29 9 11.5 9.41 12.47 10.11L17.58 5H13V3H21V11H19V6.41L13.89 11.5C14.59 12.5 15 13.7 15 15C15 16.5913 14.3679 18.1174 13.2426 19.2426C12.1174 20.3679 10.5913 21 9 21C7.4087 21 5.88258 20.3679 4.75736 19.2426C3.63214 18.1174 3 16.5913 3 15C3 13.4087 3.63214 11.8826 4.75736 10.7574C5.88258 9.63214 7.4087 9 9 9ZM9 11C7.93913 11 6.92172 11.4214 6.17157 12.1716C5.42143 12.9217 5 13.9391 5 15C5 16.0609 5.42143 17.0783 6.17157 17.8284C6.92172 18.5786 7.93913 19 9 19C10.0609 19 11.0783 18.5786 11.8284 17.8284C12.5786 17.0783 13 16.0609 13 15C13 13.9391 12.5786 12.9217 11.8284 12.1716C11.0783 11.4214 10.0609 11 9 11Z" />
    </Svg>
  );
};
