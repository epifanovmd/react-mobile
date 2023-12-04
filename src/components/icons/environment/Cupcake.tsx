import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CupcakeIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M19 14L18.1963 19.6263C18.1267 20.1134 18.0917 20.3573 17.9741 20.5405C17.8705 20.7019 17.7228 20.8299 17.5483 20.9097C17.3506 21 17.1051 21 16.6147 21H14M19 14H14M19 14C20.3031 13.3956 21 11.7637 21 10.3335C21 8.79807 19.9706 7.48314 18.5098 6.93701C18.197 6.8201 18 6.51809 18 6.2085C18 4.94284 16.8807 3.9165 15.5 3.9165C15.2737 3.9165 15.0546 3.94406 14.8462 3.99571C14.414 4.1028 13.9305 4.0791 13.5586 3.85059C12.6841 3.31321 11.6319 3 10.5 3C7.46243 3 5 5.25723 5 8.04167C5 8.39362 4.77089 8.71567 4.44287 8.8986C3.57772 9.38108 3 10.254 3 11.2502C3 12.5275 3.71228 13.6908 5 14M5 14L5.80375 19.6263L5.80387 19.6276C5.87335 20.1139 5.90813 20.3574 6.02562 20.5405C6.12922 20.7019 6.27719 20.8299 6.45166 20.9097C6.64932 21 6.89485 21 7.38528 21H10M5 14H10M10 14H14M10 14V21M14 14V21M14 21H10"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
