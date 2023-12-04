import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const PiIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M4 5V7H6V19H8V7H14V16C14 16.7956 14.3161 17.5587 14.8787 18.1213C15.4413 18.6839 16.2044 19 17 19C17.7956 19 18.5587 18.6839 19.1213 18.1213C19.6839 17.5587 20 16.7956 20 16H18C18 16.2652 17.8946 16.5196 17.7071 16.7071C17.5196 16.8946 17.2652 17 17 17C16.7348 17 16.4804 16.8946 16.2929 16.7071C16.1054 16.5196 16 16.2652 16 16V7H18V5" />
    </Svg>
  );
};
