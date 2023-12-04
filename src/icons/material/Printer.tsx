import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PrinterIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M18 3H6V7H18V3ZM19 12C18.7348 12 18.4804 11.8946 18.2929 11.7071C18.1054 11.5196 18 11.2652 18 11C18 10.7348 18.1054 10.4804 18.2929 10.2929C18.4804 10.1054 18.7348 10 19 10C19.2652 10 19.5196 10.1054 19.7071 10.2929C19.8946 10.4804 20 10.7348 20 11C20 11.2652 19.8946 11.5196 19.7071 11.7071C19.5196 11.8946 19.2652 12 19 12ZM16 19H8V14H16V19ZM19 8H5C4.20435 8 3.44129 8.31607 2.87868 8.87868C2.31607 9.44129 2 10.2044 2 11V17H6V21H18V17H22V11C22 10.2044 21.6839 9.44129 21.1213 8.87868C20.5587 8.31607 19.7956 8 19 8Z" />
    </Svg>
  );
};
