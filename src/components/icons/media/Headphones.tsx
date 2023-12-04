import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const HeadphonesIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M19 11C19 7.13401 15.866 4 12 4C8.13401 4 5 7.13401 5 11M16 14.5V16.5C16 16.9647 16 17.197 16.0384 17.3902C16.1962 18.1836 16.8165 18.8041 17.6099 18.9619C17.8031 19.0003 18.0353 19.0003 18.5 19.0003C18.9647 19.0003 19.197 19.0003 19.3902 18.9619C20.1836 18.8041 20.8036 18.1836 20.9614 17.3902C20.9999 17.197 21 16.9647 21 16.5V14.5C21 14.0353 20.9999 13.8026 20.9614 13.6094C20.8036 12.816 20.1836 12.1962 19.3902 12.0384C19.197 12 18.9647 12 18.5 12C18.0353 12 17.8031 12 17.6099 12.0384C16.8165 12.1962 16.1962 12.816 16.0384 13.6094C16 13.8026 16 14.0353 16 14.5ZM8 14.5V16.5C8 16.9647 7.99986 17.197 7.96143 17.3902C7.80361 18.1836 7.18352 18.8041 6.39014 18.9619C6.19694 19.0003 5.96469 19.0003 5.50004 19.0003C5.03539 19.0003 4.80306 19.0003 4.60986 18.9619C3.81648 18.8041 3.19624 18.1836 3.03843 17.3902C3 17.197 3 16.9647 3 16.5V14.5C3 14.0353 3 13.8026 3.03843 13.6094C3.19624 12.816 3.81648 12.1962 4.60986 12.0384C4.80306 12 5.03539 12 5.50004 12C5.9647 12 6.19694 12 6.39014 12.0384C7.18352 12.1962 7.80361 12.816 7.96143 13.6094C7.99986 13.8026 8 14.0353 8 14.5Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
