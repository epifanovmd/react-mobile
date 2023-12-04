import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MailboxOpenIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M8 4C6.67392 4 5.40215 4.52678 4.46447 5.46447C3.52678 6.40215 3 7.67392 3 9V18H1V20H21C21.5304 20 22.0391 19.7893 22.4142 19.4142C22.7893 19.0391 23 18.5304 23 18V9C23 8.34339 22.8707 7.69321 22.6194 7.08658C22.3681 6.47995 21.9998 5.92876 21.5355 5.46447C21.0712 5.00017 20.52 4.63188 19.9134 4.3806C19.3068 4.12933 18.6566 4 18 4H8ZM8 6C8.79565 6 9.55871 6.31607 10.1213 6.87868C10.6839 7.44129 11 8.20435 11 9V18H5V9C5 8.20435 5.31607 7.44129 5.87868 6.87868C6.44129 6.31607 7.20435 6 8 6ZM14 11H20V15H18V13H14V11Z" />
    </Svg>
  );
};
