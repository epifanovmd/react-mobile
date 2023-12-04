import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const DuckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8.5 5C8.10218 5 7.72064 5.15804 7.43934 5.43934C7.15804 5.72064 7 6.10218 7 6.5C7 6.89782 7.15804 7.27936 7.43934 7.56066C7.72064 7.84196 8.10218 8 8.5 8C8.89782 8 9.27936 7.84196 9.56066 7.56066C9.84196 7.27936 10 6.89782 10 6.5C10 6.10218 9.84196 5.72064 9.56066 5.43934C9.27936 5.15804 8.89782 5 8.5 5ZM10 2C11.3261 2 12.5979 2.52678 13.5355 3.46447C14.4732 4.40215 15 5.67392 15 7C15 8.7 14.15 10.2 12.86 11.1C14.44 11.25 16.22 11.61 18 12.5C21 14 22 12 22 12C22 12 21 21 15 21H9C9 21 4 21 4 16C4 13 7 12 6 10C2 10 2 6.5 2 6.5C3 7 4.24 7 5 6.65C5.19 4.05 7.36 2 10 2Z" />
    </Svg>
  );
};
