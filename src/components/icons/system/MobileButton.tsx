import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const MobileButtonIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path
        d="M7 6.2002V17.8002C7 18.9203 7 19.4801 7.21799 19.9079C7.40973 20.2842 7.71547 20.5905 8.0918 20.7822C8.5192 21 9.07899 21 10.1969 21H13.8031C14.921 21 15.48 21 15.9074 20.7822C16.2837 20.5905 16.5905 20.2842 16.7822 19.9079C17 19.4805 17 18.9215 17 17.8036V6.19691C17 5.07899 17 4.5192 16.7822 4.0918C16.5905 3.71547 16.2837 3.40973 15.9074 3.21799C15.4796 3 14.9203 3 13.8002 3H10.2002C9.08009 3 8.51962 3 8.0918 3.21799C7.71547 3.40973 7.40973 3.71547 7.21799 4.0918C7 4.51962 7 5.08009 7 6.2002Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
