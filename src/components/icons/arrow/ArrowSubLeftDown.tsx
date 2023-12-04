import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

interface IProps extends FlexSvgProps {}

export const ArrowSubLeftDownIcon: FC<IProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M13.5 12.5L8.5 17.5M8.5 17.5L3.5 12.5M8.5 17.5V9.7002C8.5 8.58009 8.5 8.01962 8.71799 7.5918C8.90973 7.21547 9.21547 6.90973 9.5918 6.71799C10.0196 6.5 10.5801 6.5 11.7002 6.5H21.5002"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
