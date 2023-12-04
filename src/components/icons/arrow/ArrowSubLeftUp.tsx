import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

interface IProps extends FlexSvgProps {}

export const ArrowSubLeftUpIcon: FC<IProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#000000" style={style} {...ownProps}>
      <Path
        d="M12.5 11.5L7.5 6.5M7.5 6.5L2.5 11.5M7.5 6.5V14.3C7.5 15.4201 7.5 15.9798 7.71799 16.4076C7.90973 16.7839 8.21547 17.0905 8.5918 17.2822C9.0192 17.5 9.57899 17.5 10.6969 17.5H20.5002"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
