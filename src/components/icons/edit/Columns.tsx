import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ColumnsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path
        d="M14 6.5V17.5C14 17.9647 14 18.197 14.0384 18.3902C14.1962 19.1836 14.8165 19.8036 15.6099 19.9614C15.8031 19.9999 16.0354 19.9999 16.5 19.9999C16.9647 19.9999 17.1969 19.9999 17.3901 19.9614C18.1835 19.8036 18.8036 19.1836 18.9614 18.3902C18.9999 18.197 19 17.9647 19 17.5V6.5C19 6.03535 18.9999 5.80306 18.9614 5.60986C18.8036 4.81648 18.1836 4.19624 17.3902 4.03843C17.197 4 16.9647 4 16.5 4C16.0353 4 15.8031 4 15.6099 4.03843C14.8165 4.19624 14.1962 4.81648 14.0384 5.60986C14 5.80306 14 6.03534 14 6.5Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M5 6.5V17.5C5 17.9647 5 18.197 5.03843 18.3902C5.19624 19.1836 5.81648 19.8036 6.60986 19.9614C6.80306 19.9999 7.03539 19.9999 7.50004 19.9999C7.96469 19.9999 8.19694 19.9999 8.39014 19.9614C9.18352 19.8036 9.80361 19.1836 9.96143 18.3902C9.99986 18.197 10 17.9647 10 17.5V6.5C10 6.03535 9.99986 5.80306 9.96143 5.60986C9.80361 4.81648 9.18356 4.19624 8.39018 4.03843C8.19698 4 7.96466 4 7.5 4C7.03534 4 6.80306 4 6.60986 4.03843C5.81648 4.19624 5.19624 4.81648 5.03843 5.60986C5 5.80306 5 6.03534 5 6.5Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
