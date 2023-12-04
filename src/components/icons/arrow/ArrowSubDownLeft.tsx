import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

interface IProps extends FlexSvgProps {}

export const ArrowSubDownLeftIcon: FC<IProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M11 11L6 16M6 16L11 21M6 16H13.8031C14.921 16 15.4802 16 15.9076 15.7822C16.2839 15.5905 16.5905 15.2839 16.7822 14.9076C17 14.4802 17 13.921 17 12.8031V3"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
