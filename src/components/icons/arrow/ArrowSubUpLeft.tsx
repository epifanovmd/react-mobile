import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

interface IProps extends FlexSvgProps {}

export const ArrowSubUpLeftIcon: FC<IProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M11 13L6 8M6 8L11 3M6 8H13.8C14.9201 8 15.4798 8 15.9076 8.21799C16.2839 8.40973 16.5905 8.71547 16.7822 9.0918C17 9.5192 17 10.079 17 11.1969V21.0002"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
