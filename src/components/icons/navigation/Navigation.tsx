import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const NavigationIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M4.80518 3.55545L20.6143 8.4198C21.4766 8.68511 21.5746 9.86635 20.7677 10.2698L14.0673 13.6199C13.8738 13.7167 13.7168 13.8736 13.62 14.0672L10.27 20.7671C9.86658 21.5741 8.68555 21.4762 8.42024 20.614L3.55544 4.80486C3.31935 4.03759 4.0379 3.31937 4.80518 3.55545Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
