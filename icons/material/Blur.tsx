import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const BlurIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M14 8.5C13.6022 8.5 13.2206 8.65804 12.9393 8.93934C12.658 9.22064 12.5 9.60218 12.5 10C12.5 10.3978 12.658 10.7794 12.9393 11.0607C13.2206 11.342 13.6022 11.5 14 11.5C14.3978 11.5 14.7794 11.342 15.0607 11.0607C15.342 10.7794 15.5 10.3978 15.5 10C15.5 9.60218 15.342 9.22064 15.0607 8.93934C14.7794 8.65804 14.3978 8.5 14 8.5ZM14 12.5C13.6022 12.5 13.2206 12.658 12.9393 12.9393C12.658 13.2206 12.5 13.6022 12.5 14C12.5 14.3978 12.658 14.7794 12.9393 15.0607C13.2206 15.342 13.6022 15.5 14 15.5C14.3978 15.5 14.7794 15.342 15.0607 15.0607C15.342 14.7794 15.5 14.3978 15.5 14C15.5 13.6022 15.342 13.2206 15.0607 12.9393C14.7794 12.658 14.3978 12.5 14 12.5ZM10 17C9.73478 17 9.48043 17.1054 9.29289 17.2929C9.10536 17.4804 9 17.7348 9 18C9 18.2652 9.10536 18.5196 9.29289 18.7071C9.48043 18.8946 9.73478 19 10 19C10.2652 19 10.5196 18.8946 10.7071 18.7071C10.8946 18.5196 11 18.2652 11 18C11 17.7348 10.8946 17.4804 10.7071 17.2929C10.5196 17.1054 10.2652 17 10 17ZM10 8.5C9.60218 8.5 9.22064 8.65804 8.93934 8.93934C8.65804 9.22064 8.5 9.60218 8.5 10C8.5 10.3978 8.65804 10.7794 8.93934 11.0607C9.22064 11.342 9.60218 11.5 10 11.5C10.3978 11.5 10.7794 11.342 11.0607 11.0607C11.342 10.7794 11.5 10.3978 11.5 10C11.5 9.60218 11.342 9.22064 11.0607 8.93934C10.7794 8.65804 10.3978 8.5 10 8.5ZM14 20.5C13.8674 20.5 13.7402 20.5527 13.6464 20.6464C13.5527 20.7402 13.5 20.8674 13.5 21C13.5 21.1326 13.5527 21.2598 13.6464 21.3536C13.7402 21.4473 13.8674 21.5 14 21.5C14.1326 21.5 14.2598 21.4473 14.3536 21.3536C14.4473 21.2598 14.5 21.1326 14.5 21C14.5 20.8674 14.4473 20.7402 14.3536 20.6464C14.2598 20.5527 14.1326 20.5 14 20.5ZM14 17C13.7348 17 13.4804 17.1054 13.2929 17.2929C13.1054 17.4804 13 17.7348 13 18C13 18.2652 13.1054 18.5196 13.2929 18.7071C13.4804 18.8946 13.7348 19 14 19C14.2652 19 14.5196 18.8946 14.7071 18.7071C14.8946 18.5196 15 18.2652 15 18C15 17.7348 14.8946 17.4804 14.7071 17.2929C14.5196 17.1054 14.2652 17 14 17ZM21 13.5C20.8674 13.5 20.7402 13.5527 20.6464 13.6464C20.5527 13.7402 20.5 13.8674 20.5 14C20.5 14.1326 20.5527 14.2598 20.6464 14.3536C20.7402 14.4473 20.8674 14.5 21 14.5C21.1326 14.5 21.2598 14.4473 21.3536 14.3536C21.4473 14.2598 21.5 14.1326 21.5 14C21.5 13.8674 21.4473 13.7402 21.3536 13.6464C21.2598 13.5527 21.1326 13.5 21 13.5ZM18 5C17.7348 5 17.4804 5.10536 17.2929 5.29289C17.1054 5.48043 17 5.73478 17 6C17 6.26522 17.1054 6.51957 17.2929 6.70711C17.4804 6.89464 17.7348 7 18 7C18.2652 7 18.5196 6.89464 18.7071 6.70711C18.8946 6.51957 19 6.26522 19 6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5ZM18 9C17.7348 9 17.4804 9.10536 17.2929 9.29289C17.1054 9.48043 17 9.73478 17 10C17 10.2652 17.1054 10.5196 17.2929 10.7071C17.4804 10.8946 17.7348 11 18 11C18.2652 11 18.5196 10.8946 18.7071 10.7071C18.8946 10.5196 19 10.2652 19 10C19 9.73478 18.8946 9.48043 18.7071 9.29289C18.5196 9.10536 18.2652 9 18 9ZM18 17C17.7348 17 17.4804 17.1054 17.2929 17.2929C17.1054 17.4804 17 17.7348 17 18C17 18.2652 17.1054 18.5196 17.2929 18.7071C17.4804 18.8946 17.7348 19 18 19C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18C19 17.7348 18.8946 17.4804 18.7071 17.2929C18.5196 17.1054 18.2652 17 18 17ZM18 13C17.7348 13 17.4804 13.1054 17.2929 13.2929C17.1054 13.4804 17 13.7348 17 14C17 14.2652 17.1054 14.5196 17.2929 14.7071C17.4804 14.8946 17.7348 15 18 15C18.2652 15 18.5196 14.8946 18.7071 14.7071C18.8946 14.5196 19 14.2652 19 14C19 13.7348 18.8946 13.4804 18.7071 13.2929C18.5196 13.1054 18.2652 13 18 13ZM10 12.5C9.60218 12.5 9.22064 12.658 8.93934 12.9393C8.65804 13.2206 8.5 13.6022 8.5 14C8.5 14.3978 8.65804 14.7794 8.93934 15.0607C9.22064 15.342 9.60218 15.5 10 15.5C10.3978 15.5 10.7794 15.342 11.0607 15.0607C11.342 14.7794 11.5 14.3978 11.5 14C11.5 13.6022 11.342 13.2206 11.0607 12.9393C10.7794 12.658 10.3978 12.5 10 12.5ZM10 7C10.2652 7 10.5196 6.89464 10.7071 6.70711C10.8946 6.51957 11 6.26522 11 6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5C9.73478 5 9.48043 5.10536 9.29289 5.29289C9.10536 5.48043 9 5.73478 9 6C9 6.26522 9.10536 6.51957 9.29289 6.70711C9.48043 6.89464 9.73478 7 10 7ZM10 3.5C10.1326 3.5 10.2598 3.44732 10.3536 3.35355C10.4473 3.25979 10.5 3.13261 10.5 3C10.5 2.86739 10.4473 2.74021 10.3536 2.64645C10.2598 2.55268 10.1326 2.5 10 2.5C9.86739 2.5 9.74021 2.55268 9.64645 2.64645C9.55268 2.74021 9.5 2.86739 9.5 3C9.5 3.13261 9.55268 3.25979 9.64645 3.35355C9.74021 3.44732 9.86739 3.5 10 3.5ZM10 20.5C9.86739 20.5 9.74021 20.5527 9.64645 20.6464C9.55268 20.7402 9.5 20.8674 9.5 21C9.5 21.1326 9.55268 21.2598 9.64645 21.3536C9.74021 21.4473 9.86739 21.5 10 21.5C10.1326 21.5 10.2598 21.4473 10.3536 21.3536C10.4473 21.2598 10.5 21.1326 10.5 21C10.5 20.8674 10.4473 20.7402 10.3536 20.6464C10.2598 20.5527 10.1326 20.5 10 20.5ZM3 13.5C2.86739 13.5 2.74021 13.5527 2.64645 13.6464C2.55268 13.7402 2.5 13.8674 2.5 14C2.5 14.1326 2.55268 14.2598 2.64645 14.3536C2.74021 14.4473 2.86739 14.5 3 14.5C3.13261 14.5 3.25979 14.4473 3.35355 14.3536C3.44732 14.2598 3.5 14.1326 3.5 14C3.5 13.8674 3.44732 13.7402 3.35355 13.6464C3.25979 13.5527 3.13261 13.5 3 13.5ZM14 3.5C14.1326 3.5 14.2598 3.44732 14.3536 3.35355C14.4473 3.25979 14.5 3.13261 14.5 3C14.5 2.86739 14.4473 2.74021 14.3536 2.64645C14.2598 2.55268 14.1326 2.5 14 2.5C13.8674 2.5 13.7402 2.55268 13.6464 2.64645C13.5527 2.74021 13.5 2.86739 13.5 3C13.5 3.13261 13.5527 3.25979 13.6464 3.35355C13.7402 3.44732 13.8674 3.5 14 3.5ZM14 7C14.2652 7 14.5196 6.89464 14.7071 6.70711C14.8946 6.51957 15 6.26522 15 6C15 5.73478 14.8946 5.48043 14.7071 5.29289C14.5196 5.10536 14.2652 5 14 5C13.7348 5 13.4804 5.10536 13.2929 5.29289C13.1054 5.48043 13 5.73478 13 6C13 6.26522 13.1054 6.51957 13.2929 6.70711C13.4804 6.89464 13.7348 7 14 7ZM21 10.5C21.1326 10.5 21.2598 10.4473 21.3536 10.3536C21.4473 10.2598 21.5 10.1326 21.5 10C21.5 9.86739 21.4473 9.74021 21.3536 9.64645C21.2598 9.55268 21.1326 9.5 21 9.5C20.8674 9.5 20.7402 9.55268 20.6464 9.64645C20.5527 9.74021 20.5 9.86739 20.5 10C20.5 10.1326 20.5527 10.2598 20.6464 10.3536C20.7402 10.4473 20.8674 10.5 21 10.5ZM6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6C5 6.26522 5.10536 6.51957 5.29289 6.70711C5.48043 6.89464 5.73478 7 6 7C6.26522 7 6.51957 6.89464 6.70711 6.70711C6.89464 6.51957 7 6.26522 7 6C7 5.73478 6.89464 5.48043 6.70711 5.29289C6.51957 5.10536 6.26522 5 6 5ZM3 9.5C2.86739 9.5 2.74021 9.55268 2.64645 9.64645C2.55268 9.74021 2.5 9.86739 2.5 10C2.5 10.1326 2.55268 10.2598 2.64645 10.3536C2.74021 10.4473 2.86739 10.5 3 10.5C3.13261 10.5 3.25979 10.4473 3.35355 10.3536C3.44732 10.2598 3.5 10.1326 3.5 10C3.5 9.86739 3.44732 9.74021 3.35355 9.64645C3.25979 9.55268 3.13261 9.5 3 9.5ZM6 9C5.73478 9 5.48043 9.10536 5.29289 9.29289C5.10536 9.48043 5 9.73478 5 10C5 10.2652 5.10536 10.5196 5.29289 10.7071C5.48043 10.8946 5.73478 11 6 11C6.26522 11 6.51957 10.8946 6.70711 10.7071C6.89464 10.5196 7 10.2652 7 10C7 9.73478 6.89464 9.48043 6.70711 9.29289C6.51957 9.10536 6.26522 9 6 9ZM6 17C5.73478 17 5.48043 17.1054 5.29289 17.2929C5.10536 17.4804 5 17.7348 5 18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19C6.26522 19 6.51957 18.8946 6.70711 18.7071C6.89464 18.5196 7 18.2652 7 18C7 17.7348 6.89464 17.4804 6.70711 17.2929C6.51957 17.1054 6.26522 17 6 17ZM6 13C5.73478 13 5.48043 13.1054 5.29289 13.2929C5.10536 13.4804 5 13.7348 5 14C5 14.2652 5.10536 14.5196 5.29289 14.7071C5.48043 14.8946 5.73478 15 6 15C6.26522 15 6.51957 14.8946 6.70711 14.7071C6.89464 14.5196 7 14.2652 7 14C7 13.7348 6.89464 13.4804 6.70711 13.2929C6.51957 13.1054 6.26522 13 6 13Z" />
    </Svg>
  );
};