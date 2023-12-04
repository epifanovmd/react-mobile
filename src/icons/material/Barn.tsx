import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const BarnIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 3L3 8.2V21H9L11.9 18L15 21H21V8.2L12 3ZM7.9 20V14L10.9 17L7.9 20ZM8.9 13H14.9L11.9 16L8.9 13ZM15.9 20L12.9 17L15.9 14V20ZM15 11H8.8V9H15V11Z" />
    </Svg>
  );
};
