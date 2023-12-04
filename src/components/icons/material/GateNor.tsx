import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const GateNorIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M2 4C5 10 5 14 2 20H5C9.4 20 13 17.7 16.6 13.7C17.15 14.5 18.04 15 19 15C19.7956 15 20.5587 14.6839 21.1213 14.1213C21.6839 13.5587 22 12.7956 22 12C22 11.2044 21.6839 10.4413 21.1213 9.87868C20.5587 9.31607 19.7956 9 19 9C18.04 9 17.15 9.5 16.6 10.3C13 6.3 9.4 4 5 4H2ZM5 6C8.8 6 12 8.1 15.3 12C12 15.9 8.8 18 5 18C6.5 14 6.5 10 5 6ZM19 11C19.5 11 20 11.5 20 12C20 12.5 19.5 13 19 13C18.7348 13 18.4804 12.8946 18.2929 12.7071C18.1054 12.5196 18 12.2652 18 12C18 11.5 18.5 11 19 11Z" />
    </Svg>
  );
};
