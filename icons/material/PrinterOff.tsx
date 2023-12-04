import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const PrinterOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M6 3V4.18L8.82 7H18V3H6ZM2.28 3L1 4.27L4.75 8C3.19 8.15 2 9.44 2 11V17H6V21H17.73L19.73 23L21 21.72L2.28 3ZM9.82 8L18.82 17H22V11C22 10.2044 21.6839 9.44129 21.1213 8.87868C20.5587 8.31607 19.7956 8 19 8H9.82ZM19 10C19.2652 10 19.5196 10.1054 19.7071 10.2929C19.8946 10.4804 20 10.7348 20 11C20 11.2652 19.8946 11.5196 19.7071 11.7071C19.5196 11.8946 19.2652 12 19 12C18.7348 12 18.4804 11.8946 18.2929 11.7071C18.1054 11.5196 18 11.2652 18 11C18 10.7348 18.1054 10.4804 18.2929 10.2929C18.4804 10.1054 18.7348 10 19 10ZM8 14H10.73L15.73 19H8V14Z" />
    </Svg>
  );
};
