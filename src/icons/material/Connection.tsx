import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ConnectionIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M21.3999 7.4998C22.1999 8.2998 22.1999 9.5998 21.3999 10.2998L18.5999 13.0998L10.7999 5.2998L13.5999 2.4998C14.3999 1.6998 15.6999 1.6998 16.3999 2.4998L18.1999 4.2998L21.1999 1.2998L22.5999 2.6998L19.5999 5.6998L21.3999 7.4998ZM15.5999 13.2998L14.1999 11.8998L11.3999 14.6998L9.2999 12.5998L12.0999 9.7998L10.6999 8.3998L7.8999 11.1998L6.3999 9.7998L3.5999 12.5998C2.7999 13.3998 2.7999 14.6998 3.5999 15.3998L5.3999 17.1998L1.3999 21.1998L2.7999 22.5998L6.7999 18.5998L8.5999 20.3998C9.3999 21.1998 10.6999 21.1998 11.3999 20.3998L14.1999 17.5998L12.7999 16.1998L15.5999 13.2998Z" />
    </Svg>
  );
};
