import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const ChatCircleCheckIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" style={style} {...ownProps} fill="none">
      <Path
        d="M15 10L11 14L9 12M12.0001 21C10.365 21 8.83174 20.5639 7.51025 19.8018C7.3797 19.7265 7.31434 19.6888 7.25293 19.6719C7.19578 19.6561 7.14475 19.6507 7.08559 19.6548C7.02253 19.6591 6.9573 19.6808 6.82759 19.7241L4.51807 20.4939L4.51625 20.4947C4.02892 20.6572 3.7848 20.7386 3.62256 20.6807C3.4812 20.6303 3.36979 20.5187 3.31938 20.3774C3.26157 20.2152 3.34268 19.9719 3.50489 19.4853L3.50586 19.4823L4.27468 17.1758L4.27651 17.171C4.31936 17.0424 4.34106 16.9773 4.34535 16.9146C4.3494 16.8554 4.34401 16.804 4.32821 16.7469C4.31146 16.6863 4.27448 16.6221 4.20114 16.495L4.19819 16.4899C3.43604 15.1684 3 13.6351 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9707 21 12.0001 21Z"
        stroke={ownProps.fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
