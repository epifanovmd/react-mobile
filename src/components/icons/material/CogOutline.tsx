import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const CogOutlineIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M12 8C13.0608 8 14.0782 8.42143 14.8284 9.17157C15.5785 9.92172 16 10.9391 16 12C16 13.0609 15.5785 14.0783 14.8284 14.8284C14.0782 15.5786 13.0608 16 12 16C10.9391 16 9.92168 15.5786 9.17153 14.8284C8.42139 14.0783 7.99996 13.0609 7.99996 12C7.99996 10.9391 8.42139 9.92172 9.17153 9.17157C9.92168 8.42143 10.9391 8 12 8ZM12 10C11.4695 10 10.9608 10.2107 10.5857 10.5858C10.2107 10.9609 9.99996 11.4696 9.99996 12C9.99996 12.5304 10.2107 13.0391 10.5857 13.4142C10.9608 13.7893 11.4695 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7892 13.0391 14 12.5304 14 12C14 11.4696 13.7892 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10ZM9.99996 22C9.74996 22 9.53996 21.82 9.49996 21.58L9.12996 18.93C8.49996 18.68 7.95996 18.34 7.43996 17.94L4.94996 18.95C4.72996 19.03 4.45996 18.95 4.33996 18.73L2.33996 15.27C2.20996 15.05 2.26996 14.78 2.45996 14.63L4.56996 12.97L4.49996 12L4.56996 11L2.45996 9.37C2.26996 9.22 2.20996 8.95 2.33996 8.73L4.33996 5.27C4.45996 5.05 4.72996 4.96 4.94996 5.05L7.43996 6.05C7.95996 5.66 8.49996 5.32 9.12996 5.07L9.49996 2.42C9.53996 2.18 9.74996 2 9.99996 2H14C14.25 2 14.46 2.18 14.5 2.42L14.87 5.07C15.5 5.32 16.04 5.66 16.56 6.05L19.05 5.05C19.27 4.96 19.54 5.05 19.66 5.27L21.66 8.73C21.79 8.95 21.73 9.22 21.54 9.37L19.43 11L19.5 12L19.43 13L21.54 14.63C21.73 14.78 21.79 15.05 21.66 15.27L19.66 18.73C19.54 18.95 19.27 19.04 19.05 18.95L16.56 17.95C16.04 18.34 15.5 18.68 14.87 18.93L14.5 21.58C14.46 21.82 14.25 22 14 22H9.99996ZM11.25 4L10.88 6.61C9.67996 6.86 8.61996 7.5 7.84996 8.39L5.43996 7.35L4.68996 8.65L6.79996 10.2C6.39996 11.37 6.39996 12.64 6.79996 13.8L4.67996 15.36L5.42996 16.66L7.85996 15.62C8.62996 16.5 9.67996 17.14 10.87 17.38L11.24 20H12.76L13.13 17.39C14.32 17.14 15.37 16.5 16.14 15.62L18.57 16.66L19.32 15.36L17.2 13.81C17.6 12.64 17.6 11.37 17.2 10.2L19.31 8.65L18.56 7.35L16.15 8.39C15.38 7.5 14.32 6.86 13.12 6.62L12.75 4H11.25Z" />
    </Svg>
  );
};
