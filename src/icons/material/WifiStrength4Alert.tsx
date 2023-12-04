import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WifiStrength4AlertIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M11.9999 3C7.7999 3 3.6999 4.4 0.399902 7C4.3999 12.1 7.8999 16.4 11.9999 21.5C14.3999 18.5 16.6999 15.7 18.9999 12.8V8H22.7999C22.9999 7.7 23.3999 7.3 23.5999 7C20.2999 4.4 16.1999 3 11.9999 3ZM20.9999 10V16H22.9999V10H20.9999ZM20.9999 18V20H22.9999V18" />
    </Svg>
  );
};
