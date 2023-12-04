import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const ScentOffIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.6001 16.4992C13.7001 17.7992 13.0001 19.1992 13.0001 20.4992C13.0001 20.8992 13.1001 21.2992 13.2001 21.7992C13.2001 21.8992 13.2001 21.9992 13.1001 22.0992C13.0001 22.1992 12.9001 22.0992 12.9001 21.9992C11.9001 20.6992 11.4001 19.4992 11.4001 18.0992C11.4001 16.8992 11.8001 15.6992 12.6001 14.4992L11.2001 13.0992C10.1001 14.4992 9.4001 15.9992 9.4001 17.4992C9.4001 17.8992 9.5001 18.2992 9.6001 18.7992C9.6001 18.8992 9.6001 18.9992 9.5001 19.0992C9.4001 19.1992 9.3001 19.0992 9.3001 18.9992C8.3001 17.6992 7.8001 16.4992 7.8001 15.0992C7.8001 13.7992 8.3001 12.4992 9.3001 11.0992L7.9001 9.79922C6.9001 10.9992 6.2001 12.1992 6.2001 13.3992C6.2001 13.6992 6.3001 14.0992 6.4001 14.2992C6.4001 14.3992 6.4001 14.3992 6.3001 14.4992C6.2001 14.5992 6.1001 14.4992 6.1001 14.4992C5.3001 13.5992 5.0001 12.5992 5.0001 11.6992C5.0001 10.5992 5.5001 9.49922 6.4001 8.39922L1.1001 2.99922L2.4001 1.69922L22.1001 21.3992L20.8001 22.6992L14.6001 16.4992ZM10.2001 6.99922C10.6001 6.29922 10.8001 5.59922 10.8001 4.89922C10.8001 3.99922 10.5001 2.99922 9.7001 2.09922C9.6001 1.99922 9.5001 1.99922 9.4001 1.99922C9.3001 1.99922 9.4001 2.09922 9.4001 2.19922C9.5001 2.49922 9.6001 2.79922 9.6001 3.09922C9.6001 3.89922 9.3001 4.69922 8.8001 5.49922L10.2001 6.99922ZM17.3001 6.49922C17.3001 8.19922 16.2001 9.99922 14.8001 11.5992L16.8001 13.5992C18.3001 12.0992 19.0001 10.5992 19.0001 8.99922C19.0001 7.69922 18.5001 6.39922 17.5001 5.09922C17.4001 4.99922 17.4001 4.99922 17.3001 4.99922C17.2001 5.09922 17.2001 5.19922 17.2001 5.29922C17.2001 5.69922 17.3001 6.09922 17.3001 6.49922ZM13.5001 10.2992C14.7001 8.79922 15.3001 7.39922 15.3001 5.89922C15.3001 4.59922 14.8001 3.29922 13.8001 1.99922H13.6001C13.5001 2.09922 13.5001 2.19922 13.5001 2.29922C13.6001 2.69922 13.7001 3.09922 13.7001 3.59922C13.7001 5.19922 12.8001 6.79922 11.5001 8.39922L13.5001 10.2992Z" />
    </Svg>
  );
};
