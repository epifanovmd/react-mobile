import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const TableColumnPlusBeforeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13 2C12.4696 2 11.9609 2.21071 11.5858 2.58579C11.2107 2.96086 11 3.46957 11 4V20C11 20.5304 11.2107 21.0391 11.5858 21.4142C11.9609 21.7893 12.4696 22 13 22H22V2H13ZM20 10V14H13V10H20ZM20 16V20H13V16H20ZM20 4V8H13V4H20ZM9 11H6V8H4V11H1V13H4V16H6V13H9V11Z" />
    </Svg>
  );
};
