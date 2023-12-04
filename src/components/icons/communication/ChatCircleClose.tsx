import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ChatCircleCloseIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14M11.9996 21C10.3645 21 8.83126 20.5639 7.50977 19.8018L7.50563 19.7994C7.37783 19.7257 7.31368 19.6887 7.25293 19.6719C7.19578 19.6561 7.14475 19.6507 7.08559 19.6548C7.02214 19.6591 6.95537 19.6813 6.82405 19.7251L4.51758 20.4939L4.51155 20.4962C4.02705 20.6577 3.78482 20.7384 3.62305 20.6807C3.48169 20.6303 3.36979 20.5187 3.31938 20.3774C3.26157 20.2152 3.34268 19.9719 3.50489 19.4853L3.50586 19.4823L4.27468 17.1758C4.3186 17.044 4.34003 16.9781 4.34437 16.9146C4.34842 16.8554 4.34401 16.804 4.32821 16.7469C4.31146 16.6863 4.27448 16.6221 4.20114 16.495L4.19819 16.4899C3.43604 15.1684 3 13.6351 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9702 21 11.9996 21Z"
        stroke={ownProps.fill || ownProps.color || '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
