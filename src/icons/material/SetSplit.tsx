import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const SetSplitIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M17 7V9H22V7H17ZM2 9V15H7V9H2ZM12 9V11H9V13H12V15L15 12L12 9ZM17 11V13H22V11H17ZM17 15V17H22V15H17Z" />
    </Svg>
  );
};
