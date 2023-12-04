import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const NintendoSwitchIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M10.04 20.4H7.12C6.19 20.4 5.3 20 4.64 19.36C4 18.7 3.6 17.81 3.6 16.88V7.12C3.6 6.19 4 5.3 4.64 4.64C5.3 4 6.19 3.62 7.12 3.62H10.04V20.4ZM7.12 2C5.76209 2 4.4598 2.53943 3.49961 3.49961C2.53943 4.4598 2 5.76209 2 7.12V16.88C2 19.71 4.29 22 7.12 22H11.65V2H7.12ZM5.11 8C5.11 9.04 5.95 9.88 7 9.88C8.03 9.88 8.87 9.04 8.87 8C8.87 6.96 8.03 6.12 7 6.12C5.95 6.12 5.11 6.96 5.11 8ZM17.61 11C18.72 11 19.62 11.89 19.62 13C19.62 14.12 18.72 15 17.61 15C16.5 15 15.58 14.12 15.58 13C15.58 11.89 16.5 11 17.61 11ZM16.88 22C18.2379 22 19.5402 21.4606 20.5004 20.5004C21.4606 19.5402 22 18.2379 22 16.88V7.12C22 4.29 19.71 2 16.88 2H13.65V22H16.88Z" />
    </Svg>
  );
};
