import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CarLimousineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M1 6L2.5 7.5L1 9L2.5 10.5L1 12L2.5 13.5L1 15H15C15 15.7956 15.3161 16.5587 15.8787 17.1213C16.4413 17.6839 17.2044 18 18 18C18.7956 18 19.5587 17.6839 20.1213 17.1213C20.6839 16.5587 21 15.7956 21 15H23V12C23 10.89 22.11 10 21 10H19L16 6H1ZM4.62 7.5H10.5V10H4.12L3.12 9L4.62 7.5ZM12 7.5H15.5L17.46 10H12V7.5ZM18 13.5C18.3978 13.5 18.7794 13.658 19.0607 13.9393C19.342 14.2206 19.5 14.6022 19.5 15C19.5 15.3978 19.342 15.7794 19.0607 16.0607C18.7794 16.342 18.3978 16.5 18 16.5C17.6022 16.5 17.2206 16.342 16.9393 16.0607C16.658 15.7794 16.5 15.3978 16.5 15C16.5 14.6022 16.658 14.2206 16.9393 13.9393C17.2206 13.658 17.6022 13.5 18 13.5Z" />
    </Svg>
  );
};
