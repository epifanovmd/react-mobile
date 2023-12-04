import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MedalOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.94 19.5L12 17.77L9.06001 19.5L9.84001 16.16L7.25001 13.92L10.66 13.63L12 10.5L13.34 13.63L16.75 13.92L14.16 16.16L14.94 19.5ZM20 2H4.00001V4L8.86001 7.64C7.16442 8.36359 5.77077 9.65057 4.91475 11.2833C4.05873 12.916 3.79287 14.7943 4.16215 16.6005C4.53143 18.4067 5.51317 20.0299 6.94135 21.1956C8.36952 22.3613 10.1565 22.998 12 22.998C13.8435 22.998 15.6305 22.3613 17.0587 21.1956C18.4869 20.0299 19.4686 18.4067 19.8379 16.6005C20.2071 14.7943 19.9413 12.916 19.0853 11.2833C18.2293 9.65057 16.8356 8.36359 15.14 7.64L20 4V2ZM18 15C18.0005 16.1363 17.6784 17.2493 17.0711 18.2097C16.4638 19.1701 15.5962 19.9382 14.5694 20.4248C13.5426 20.9114 12.3987 21.0964 11.2709 20.9584C10.143 20.8203 9.07757 20.3648 8.19847 19.6448C7.31937 18.9249 6.66277 17.9701 6.30507 16.8916C5.94737 15.8131 5.90327 14.6552 6.1779 13.5526C6.45253 12.4501 7.03461 11.4481 7.85641 10.6634C8.6782 9.87869 9.70593 9.34347 10.82 9.12C11.5985 8.95995 12.4015 8.95995 13.18 9.12C14.5389 9.39258 15.7616 10.1272 16.6402 11.1991C17.5189 12.271 17.9994 13.614 18 15ZM12.63 7H11.37L7.37001 4H16.71L12.63 7Z" />
    </Svg>
  );
};
