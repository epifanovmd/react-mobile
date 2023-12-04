import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

interface IProps extends FlexSvgProps {}

export const ArrowSubRightUpIcon: FC<IProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M11 11L16 6M16 6L21 11M16 6V13.8031C16 14.921 16 15.4802 15.7822 15.9076C15.5905 16.2839 15.2839 16.5905 14.9076 16.7822C14.4802 17 13.921 17 12.8031 17H3"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
