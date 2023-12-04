import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LanguageHtml5Icon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.9999 17.56L16.0699 16.43L16.6199 10.33H9.37995L9.19995 8.3H16.7999L16.9999 6.31H6.99995L7.55995 12.32H14.4499L14.2199 14.9L11.9999 15.5L9.77995 14.9L9.63995 13.24H7.63995L7.92995 16.43L11.9999 17.56ZM4.06995 3H19.9299L18.4999 19.2L11.9999 21L5.49995 19.2L4.06995 3Z" />
    </Svg>
  );
};
