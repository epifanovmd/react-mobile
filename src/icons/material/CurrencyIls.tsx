import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const CurrencyIlsIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M22 16C22 17.3261 21.4732 18.5979 20.5355 19.5355C19.5979 20.4732 18.3261 21 17 21H8V9H10V19H17C17.7956 19 18.5587 18.6839 19.1213 18.1213C19.6839 17.5587 20 16.7956 20 16V3H22V16ZM16 8V15H14V8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5H4V21H2V3H11C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8Z" />
    </Svg>
  );
};
