import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const TableRefreshIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18 14.5C19.11 14.5 20.11 14.95 20.83 15.67L22 14.5V18.5H18L19.77 16.73C19.32 16.28 18.69 16 18 16C16.62 16 15.5 17.12 15.5 18.5C15.5 19.88 16.62 21 18 21C18.82 21 19.55 20.61 20 20H21.71C21.12 21.47 19.68 22.5 18 22.5C15.79 22.5 14 20.71 14 18.5C14 16.29 15.79 14.5 18 14.5ZM4 3H18C19.11 3 20 3.9 20 5V12.17C19.5 12.06 19 12 18.5 12C17.23 12 16.04 12.37 15.04 13H12V17H12.18C12.06 17.5 12 18 12 18.5V19H4C2.9 19 2 18.11 2 17V5C2 3.9 2.9 3 4 3ZM4 7V11H10V7H4ZM12 7V11H18V7H12ZM4 13V17H10V13H4Z" />
    </Svg>
  );
};
