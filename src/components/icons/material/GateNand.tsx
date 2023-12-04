import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const GateNandIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 4V20H10C13.43 20 16.5 17.84 17.6 14.6C18 14.8 18.5 15 19 15C19.7956 15 20.5587 14.6839 21.1213 14.1213C21.6839 13.5587 22 12.7956 22 12C22 11.2044 21.6839 10.4413 21.1213 9.87868C20.5587 9.31607 19.7956 9 19 9C18.5 9 18.03 9.15 17.6 9.4C16.5 6.16 13.43 4 10 4H2ZM4 6H10C11.5913 6 13.1174 6.63214 14.2426 7.75736C15.3679 8.88258 16 10.4087 16 12C16 13.5913 15.3679 15.1174 14.2426 16.2426C13.1174 17.3679 11.5913 18 10 18H4V6ZM19 11C19.5 11 20 11.5 20 12C20 12.5 19.5 13 19 13C18.7348 13 18.4804 12.8946 18.2929 12.7071C18.1054 12.5196 18 12.2652 18 12C18 11.5 18.5 11 19 11Z" />
    </Svg>
  );
};
