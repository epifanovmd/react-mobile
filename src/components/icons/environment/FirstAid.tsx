import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const FirstAidIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M9 20C9 20.5523 9.44772 21 10 21H14C14.5523 21 15 20.5523 15 20V15L20 15C20.5523 15 21 14.5523 21 14V10C21 9.44772 20.5523 9 20 9H15L15 4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V9H4C3.44772 9 3 9.44772 3 10V14C3 14.5523 3.44772 15 4 15H9V20Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
