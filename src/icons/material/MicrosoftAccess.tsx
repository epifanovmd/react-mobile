import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const MicrosoftAccessIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M14.5 2.63086C15.3933 2.63086 16.2867 2.67753 17.18 2.77086L17.85 2.86086C18.15 2.90753 18.48 2.96753 18.84 3.04086C19.1933 3.11419 19.5567 3.20419 19.93 3.31086C20.31 3.41753 20.6533 3.54419 20.96 3.69086C21.2667 3.83753 21.5167 4.00419 21.71 4.19086C21.9033 4.37753 22 4.58419 22 4.81086V19.1909C22 19.4175 21.9033 19.6242 21.71 19.8109C21.51 19.9975 21.26 20.1642 20.96 20.3109C20.6533 20.4575 20.31 20.5842 19.93 20.6909C19.5567 20.7975 19.19 20.8875 18.83 20.9609C18.4767 21.0342 18.1533 21.0942 17.86 21.1409C17.56 21.1875 17.33 21.2175 17.17 21.2309C16.2833 21.3309 15.3933 21.3809 14.5 21.3809C13.6 21.3809 12.7067 21.3309 11.82 21.2309C11.6667 21.2175 11.4433 21.1875 11.15 21.1409C10.85 21.0942 10.52 21.0342 10.16 20.9609C9.80667 20.8875 9.44333 20.7975 9.07 20.6909C8.69 20.5842 8.35 20.4575 8.05 20.3109C7.74333 20.1642 7.49 19.9975 7.29 19.8109C7.09667 19.6242 7 19.4175 7 19.1909V17.0009H2.83C2.61 17.0009 2.41333 16.9209 2.24 16.7609C2.08 16.5875 2 16.3909 2 16.1709V7.83086C2 7.61086 2.08 7.41419 2.24 7.24086C2.41333 7.08086 2.61 7.00086 2.83 7.00086H7V4.81086C7 4.58419 7.09667 4.37753 7.29 4.19086C7.49 4.00419 7.74333 3.83753 8.05 3.69086C8.35 3.54419 8.69 3.41753 9.07 3.31086C9.44333 3.20419 9.81 3.11419 10.17 3.04086C10.5233 2.96753 10.8467 2.90753 11.14 2.86086C11.44 2.82086 11.67 2.79086 11.83 2.77086C12.71 2.67753 13.6 2.63086 14.5 2.63086ZM14.5 3.88086C14.08 3.88086 13.6067 3.89419 13.08 3.92086C12.56 3.94753 12.0333 3.99753 11.5 4.07086C10.96 4.14419 10.4367 4.24086 9.93 4.36086C9.42333 4.48086 8.97333 4.63086 8.58 4.81086C8.98667 5.00419 9.44333 5.16086 9.95 5.28086C10.45 5.40086 10.9667 5.49419 11.5 5.56086C12.0267 5.62753 12.55 5.67753 13.07 5.71086C13.59 5.73753 14.0667 5.75086 14.5 5.75086C14.94 5.75086 15.4167 5.73753 15.93 5.71086C16.45 5.67753 16.9733 5.62753 17.5 5.56086C18.0333 5.49419 18.5533 5.40086 19.06 5.28086C19.56 5.16086 20.0133 5.00419 20.42 4.81086C20.0267 4.63086 19.5767 4.48086 19.07 4.36086C18.5633 4.24086 18.04 4.14419 17.5 4.07086C16.9667 3.99753 16.44 3.94753 15.92 3.92086C15.4 3.89419 14.9267 3.88086 14.5 3.88086ZM5.94 13.7909H8.06L8.55 15.2809H10.22L7.83 8.72086H6.2L3.78 15.2809H5.44L5.94 13.7909ZM20.75 19.0009V16.0009C20.3233 16.2075 19.8433 16.3742 19.31 16.5009C18.77 16.6209 18.2233 16.7175 17.67 16.7909C17.11 16.8642 16.5533 16.9175 16 16.9509C15.46 16.9842 14.96 17.0009 14.5 17.0009C14.0267 17.0009 13.5533 16.9875 13.08 16.9609C12.6067 16.9275 12.1367 16.8842 11.67 16.8309C11.5167 16.9442 11.35 17.0009 11.17 17.0009H8.25V19.0009C8.43667 19.1409 8.68667 19.2675 9 19.3809C9.33333 19.5009 9.69 19.6009 10.07 19.6809C10.4567 19.7675 10.8633 19.8409 11.29 19.9009C11.71 19.9675 12.1133 20.0109 12.5 20.0309C12.9133 20.0709 13.2933 20.0975 13.64 20.1109C13.9867 20.1242 14.2733 20.1309 14.5 20.1309C14.7267 20.1242 15.0133 20.1142 15.36 20.1009C15.7067 20.0942 16.0867 20.0709 16.5 20.0309C16.8867 20.0109 17.29 19.9675 17.71 19.9009C18.1367 19.8409 18.5433 19.7675 18.93 19.6809C19.31 19.6009 19.6667 19.5009 20 19.3809C20.3133 19.2675 20.5633 19.1409 20.75 19.0009ZM20.75 14.6309V11.0009C20.3233 11.2075 19.8433 11.3742 19.31 11.5009C18.77 11.6209 18.2233 11.7175 17.67 11.7909C17.11 11.8642 16.5533 11.9175 16 11.9509C15.46 11.9842 14.96 12.0009 14.5 12.0009C14.0867 12.0009 13.67 11.9909 13.25 11.9709C12.8367 11.9442 12.42 11.9109 12 11.8709V15.6209C12.42 15.6675 12.8367 15.7009 13.25 15.7209C13.67 15.7409 14.0867 15.7509 14.5 15.7509C14.74 15.7509 15.0333 15.7442 15.38 15.7309C15.7267 15.7175 16.1 15.6942 16.5 15.6609C16.8867 15.6209 17.2867 15.5675 17.7 15.5009C18.12 15.4609 18.52 15.3975 18.9 15.3109C19.3 15.2242 19.6533 15.1209 19.96 15.0009C20.2867 14.9009 20.55 14.7775 20.75 14.6309ZM20.75 9.63086V6.00086C20.3233 6.20753 19.8433 6.37419 19.31 6.50086C18.77 6.62086 18.2233 6.71753 17.67 6.79086C17.11 6.86419 16.5533 6.91753 16 6.95086C15.46 6.98419 14.96 7.00086 14.5 7.00086C14.04 7.00086 13.54 6.98419 13 6.95086C12.4467 6.91753 11.89 6.86419 11.33 6.79086C10.7767 6.71753 10.23 6.62086 9.69 6.50086C9.15667 6.37419 8.67667 6.20753 8.25 6.00086V7.00086H11.17C11.39 7.00086 11.5867 7.08086 11.76 7.24086C11.92 7.41419 12 7.61086 12 7.83086V10.6209C12.42 10.6675 12.8367 10.7009 13.25 10.7209C13.67 10.7409 14.0867 10.7509 14.5 10.7509C14.74 10.7509 15.0333 10.7442 15.38 10.7309C15.7267 10.7175 16.1 10.6942 16.5 10.6609C16.8867 10.6209 17.2867 10.5675 17.7 10.5009C18.12 10.4609 18.52 10.3975 18.9 10.3109C19.3 10.2242 19.6533 10.1209 19.96 10.0009C20.28 9.90086 20.5433 9.77753 20.75 9.63086ZM6.32 12.5009L7 10.5009L7.65 12.5009H6.32Z" />
    </Svg>
  );
};
