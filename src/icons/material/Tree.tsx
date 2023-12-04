import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TreeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11 21V16.74C10.53 16.91 10.03 17 9.5 17C7 17 5 15 5 12.5C5 11.23 5.5 10.09 6.36 9.27C6.13 8.73 6 8.13 6 7.5C6 5 8 3 10.5 3C12.06 3 13.44 3.8 14.25 5C14.33 5 14.41 5 14.5 5C15.2223 5 15.9375 5.14226 16.6048 5.41866C17.272 5.69506 17.8784 6.10019 18.3891 6.61091C18.8998 7.12163 19.3049 7.72795 19.5813 8.39524C19.8577 9.06253 20 9.77773 20 10.5C20 11.2223 19.8577 11.9375 19.5813 12.6048C19.3049 13.272 18.8998 13.8784 18.3891 14.3891C17.8784 14.8998 17.272 15.3049 16.6048 15.5813C15.9375 15.8577 15.2223 16 14.5 16C14 16 13.5 15.93 13 15.79V21H11Z" />
    </Svg>
  );
};
