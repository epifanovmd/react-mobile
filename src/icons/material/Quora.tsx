import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const QuoraIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M19.7 18.7997C20.2 18.1997 20.1 17.6997 20.1 17.6997H21.6C21.6 17.6997 21.6 18.0997 21.5 18.5997C21.4 18.9997 21.3 19.2997 21.2 19.5997C21 20.2997 20 21.0997 20 21.0997C18.9 21.9997 17.7 21.8997 17.7 21.8997C17.7 21.8997 16.3 22.0997 15.2 21.3997C14.1 20.6997 13.2 19.1997 13.2 19.1997C13.2 19.1997 8.79997 20.3997 5.39997 17.4997C1.99997 14.5997 2.19997 11.0997 2.19997 10.7997C2.19997 10.0997 2.59997 2.29973 10.8 1.99973C15.6 1.79973 18.2 4.79973 19.2 7.19973C19.9 8.89973 19.9 10.1997 19.9 10.3997C19.9 10.5997 19.9 11.4997 19.7 12.3997C19.6 13.2997 19.2 14.2997 18.9 14.7997C18.6 15.2997 18.2 15.9997 17.7 16.4997C17.2 17.0997 16.6 17.5997 16.5 17.6997C16.5 17.6997 17.5 18.8997 18.1 19.0997C18.3 19.0997 19.2 19.3997 19.7 18.7997ZM12.7 17.2997C12.8 17.1997 12.4 16.6997 12.2 16.3997C12 16.0997 12.3 16.4997 11.5 15.3997C11.2 14.8997 10.8 14.6997 10.2 14.5997C9.99997 14.5997 9.69997 14.5997 9.49997 14.5997C8.99997 14.5997 8.69997 14.6997 8.59997 14.6997C8.59997 14.5997 8.39997 14.3997 8.29997 14.1997C8.19997 13.9997 8.19997 13.6997 8.19997 13.6997C8.19997 13.4997 9.69997 12.7997 11.4 12.7997C12.8 12.7997 13.8 13.5997 14.2 13.9997C14.6 14.2997 14.7 14.6997 15.1 14.9997C15.1 14.9997 15.2 14.9997 15.2 15.0997C15.6 15.3997 16.1 12.0997 16 9.89973C15.9 7.69973 15.8 6.59973 15 5.49973C14.3 4.49973 12.8 3.69973 11.4 3.69973C10.7 3.69973 8.39997 3.79973 7.39997 5.49973C6.19997 7.49973 6.39997 11.0997 6.39997 11.0997C6.39997 11.0997 6.09997 14.2997 7.79997 15.9997C9.49997 17.6997 11.2 17.3997 12 17.3997L12.7 17.2997Z" />
    </Svg>
  );
};