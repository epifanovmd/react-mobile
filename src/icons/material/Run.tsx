import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const RunIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M13.4999 5.5C14.5899 5.5 15.4999 4.58 15.4999 3.5C15.4999 2.38 14.5899 1.5 13.4999 1.5C12.3899 1.5 11.4999 2.38 11.4999 3.5C11.4999 4.58 12.3899 5.5 13.4999 5.5ZM9.88989 19.38L10.8899 15L12.9999 17V23H14.9999V15.5L12.8899 13.5L13.4999 10.5C14.7899 12 16.7899 13 18.9999 13V11C17.0899 11 15.4999 10 14.6899 8.58L13.6899 7C13.2899 6.38 12.6899 6 11.9999 6C11.6899 6 11.4999 6.08 11.1899 6.08L5.99989 8.28V13H7.99989V9.58L9.78989 8.88L8.18989 17L3.28989 16L2.88989 18L9.88989 19.38Z" />
    </Svg>
  );
};
