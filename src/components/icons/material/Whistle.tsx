import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const WhistleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8.5 9C6.77609 9 5.12279 9.68482 3.90381 10.9038C2.68482 12.1228 2 13.7761 2 15.5C2 16.3536 2.16813 17.1988 2.49478 17.9874C2.82144 18.7761 3.30023 19.4926 3.90381 20.0962C5.12279 21.3152 6.77609 22 8.5 22C9.35359 22 10.1988 21.8319 10.9874 21.5052C11.7761 21.1786 12.4926 20.6998 13.0962 20.0962C13.6998 19.4926 14.1786 18.7761 14.5052 17.9874C14.8319 17.1988 15 16.3536 15 15.5V13.91L22 12V9H11V11H9V9H8.5ZM11 2V7H9V2H11ZM6.35 7.28C5.68 7.44 5.04 7.68 4.43 8L2.14 4.88L3.76 3.7L6.35 7.28ZM17.86 4.88L16.32 7H13.85L16.24 3.7L17.86 4.88Z" />
    </Svg>
  );
};
