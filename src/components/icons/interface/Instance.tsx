import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const InstanceIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path
        d="M14.2629 20.344L20.344 14.2629C21.1361 13.4709 21.532 13.0746 21.6803 12.6179C21.8109 12.2162 21.8109 11.7844 21.6803 11.3827C21.532 10.926 21.1361 10.5291 20.344 9.73711L14.2616 3.65465C13.4704 2.86351 13.0748 2.46786 12.6184 2.31957C12.2167 2.18905 11.7839 2.18905 11.3822 2.31957C10.9257 2.46788 10.529 2.86462 9.7376 3.65599L3.65648 9.73711L3.656 9.73802C2.86429 10.5297 2.46791 10.9261 2.31957 11.3827C2.18905 11.7844 2.18905 12.2162 2.31957 12.6179C2.46786 13.0743 2.864 13.4704 3.65514 14.2616L9.74136 20.3478C10.5309 21.1373 10.9262 21.5327 11.3822 21.6808C11.7839 21.8113 12.2167 21.8113 12.6184 21.6808C13.0749 21.5325 13.4706 21.1368 14.2621 20.3453L14.2629 20.344Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
