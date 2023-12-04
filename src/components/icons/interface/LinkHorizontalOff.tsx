import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const LinkHorizontalOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M8 12H12M12 12L8 8M12 12L20 20M15 8H17C19.2091 8 21 9.79086 21 12C21 13.1947 20.4759 14.2671 19.6455 15M9 16H7C4.79086 16 3 14.2091 3 12C3 9.79086 4.79086 8 7 8H8M8 8L4 4"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
