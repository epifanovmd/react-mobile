import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const StackExchangeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M3.8999 10.72H19.9999V14.03H3.8999V10.72ZM3.8999 6.44H19.9999V9.75H3.8999V6.44ZM17.4999 2H6.4999C5.0599 2 3.8999 3.18 3.8999 4.65V5.5H19.9999V4.65C19.9999 3.18 18.8799 2 17.4999 2ZM3.8999 15V15.84C3.8999 17.31 5.0599 18.5 6.4999 18.5H13.3699V22L16.7699 18.5H17.4999C18.9399 18.5 20.1099 17.31 20.1099 15.84V15H3.8999Z" />
    </Svg>
  );
};
