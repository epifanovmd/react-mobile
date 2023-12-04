import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DivingScubaTankIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19 18.5C19 19.163 18.7366 19.7989 18.2678 20.2678C17.7989 20.7366 17.163 21 16.5 21C15.837 21 15.2011 20.7366 14.7322 20.2678C14.2634 19.7989 14 19.163 14 18.5C14 17.47 14.62 16.59 15.5 16.21V6H11V7.35C12.22 7.93 13 9.15 13 10.5V22H6V10.5C6 9.15 6.78 7.93 8 7.35V6H6V4H8V3.5C8 3.10218 8.15804 2.72064 8.43934 2.43934C8.72064 2.15804 9.10218 2 9.5 2C9.89782 2 10.2794 2.15804 10.5607 2.43934C10.842 2.72064 11 3.10218 11 3.5V4H15.5C16.0304 4 16.5391 4.21071 16.9142 4.58579C17.2893 4.96086 17.5 5.46957 17.5 6V16.21C18.38 16.59 19 17.47 19 18.5Z" />
    </Svg>
  );
};
