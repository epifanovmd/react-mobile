import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const OctagonIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M14.4053 21H9.59375C9.10457 21 8.86006 20.9996 8.62988 20.9443C8.42581 20.8953 8.23099 20.815 8.05204 20.7053C7.85021 20.5817 7.67763 20.4091 7.33173 20.0632L3.9375 16.6689C3.59182 16.3233 3.41857 16.15 3.29492 15.9482C3.18526 15.7693 3.10425 15.5743 3.05526 15.3702C3 15.14 3 14.8945 3 14.4053V9.59375C3 9.10457 3 8.86006 3.05526 8.62988C3.10425 8.42581 3.18526 8.23098 3.29492 8.05204C3.41748 7.85205 3.58846 7.68107 3.92809 7.34144L3.9375 7.33173L7.33173 3.9375L7.3414 3.92813C7.68106 3.58847 7.85204 3.41748 8.05204 3.29492C8.23099 3.18526 8.42581 3.10425 8.62988 3.05526C8.86006 3 9.10457 3 9.59375 3H14.4053C14.8945 3 15.14 3 15.3702 3.05526C15.5743 3.10425 15.7693 3.18526 15.9482 3.29492C16.15 3.41857 16.3233 3.59181 16.6689 3.9375L20.0632 7.33173C20.409 7.67759 20.5817 7.85022 20.7053 8.05205C20.815 8.23099 20.8953 8.42581 20.9443 8.62988C20.9996 8.86006 21 9.10457 21 9.59375V14.4053M20.9996 14.4062C20.9996 14.8954 20.9996 15.14 20.9443 15.3702C20.8953 15.5743 20.815 15.7693 20.7053 15.9482C20.5817 16.1501 20.4091 16.323 20.0632 16.6689L16.6689 20.0632C16.323 20.4091 16.1501 20.5817 15.9482 20.7053C15.7693 20.815 15.5743 20.8953 15.3702 20.9443C15.14 20.9996 14.8954 20.9996 14.4062 20.9996"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
