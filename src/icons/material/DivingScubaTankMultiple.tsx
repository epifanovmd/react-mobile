import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DivingScubaTankMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 18.5C22 19.163 21.7366 19.7989 21.2678 20.2678C20.7989 20.7366 20.163 21 19.5 21C18.837 21 18.2011 20.7366 17.7322 20.2678C17.2634 19.7989 17 19.163 17 18.5C17 17.47 17.62 16.59 18.5 16.21V6H14V7.35C15.22 7.93 16 9.15 16 10.5V22H2V10.5C2 9.15 2.78 7.93 4 7.35V6H2V4H4V3.5C4 3.10218 4.15804 2.72064 4.43934 2.43934C4.72064 2.15804 5.10218 2 5.5 2C5.89782 2 6.27936 2.15804 6.56066 2.43934C6.84196 2.72064 7 3.10218 7 3.5V4H11V3.5C11 3.10218 11.158 2.72064 11.4393 2.43934C11.7206 2.15804 12.1022 2 12.5 2C12.8978 2 13.2794 2.15804 13.5607 2.43934C13.842 2.72064 14 3.10218 14 3.5V4H18.5C19.0304 4 19.5391 4.21071 19.9142 4.58579C20.2893 4.96086 20.5 5.46957 20.5 6V16.21C21.38 16.59 22 17.47 22 18.5ZM11 7.35V6H7V7.35C8.22 7.93 9 9.15 9 10.5C9 9.15 9.78 7.93 11 7.35Z" />
    </Svg>
  );
};
