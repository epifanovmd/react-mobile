import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const JabberIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M5.22997 5.71956C4.60997 5.54956 4.99997 3.18956 4.99997 3.16956C4.99997 3.18956 12.58 -0.710439 16.7 5.72956C20.8 12.1496 15.86 14.8596 13.97 16.0596C12.08 17.2696 12.73 19.7196 12.73 20.1296C12.73 20.5296 12.16 20.9696 12 20.4096C11.88 19.8396 11.25 16.5496 13.33 15.1596C17.13 12.6096 17.9 10.0996 16 6.41956C14.2 2.99956 8.27997 3.40956 7.02997 4.07956C5.77997 4.74956 5.85997 5.88956 5.22997 5.71956ZM9.32997 12.6296L9.10996 12.1596C9.22996 10.2796 7.62997 10.3896 8.07997 13.3296C8.20997 14.1596 7.46997 13.7996 7.44997 13.7296C6.88997 11.4396 7.41997 10.2196 8.54997 10.4496C9.61997 10.6796 9.52996 11.8296 9.52996 11.8296C9.55997 11.7796 11 10.1696 11.5 10.9196C12.58 12.4996 10.53 14.4696 10.41 14.6296C10.28 14.7796 10.14 15.0496 9.91997 14.8396C9.69997 14.6396 9.71997 14.4996 9.88997 14.2696C12.77 9.99956 9.58996 12.2196 9.32997 12.6296ZM6.49997 15.3296V15.3096C6.49997 15.3096 7.99996 18.1296 10.61 17.0796C11 16.9196 11.17 17.1396 11.2 17.2696C11.27 17.5296 11.13 17.6396 10.86 17.7296C7.85996 18.7196 5.88997 16.6296 5.62997 16.1296C5.38997 15.6796 5.49997 15.3796 5.74997 15.2196C5.99997 15.0596 6.49997 15.3296 6.49997 15.3296ZM5.99997 17.4996C5.99997 17.4996 7.66997 19.4996 10.8 18.9996C11.09 18.9396 11.2 19.1296 11.25 19.3796C11.3 19.6296 11.22 19.8396 10.92 19.9396C10.63 20.0296 7.07997 20.4996 5.12997 17.7196C4.99997 17.5596 5.29997 17.3596 5.46997 17.3596C5.63997 17.3596 6.02997 17.4996 5.99997 17.4996ZM5.94997 19.3896C7.52997 21.4996 10.33 21.5496 11.28 20.8796C11.5 20.7296 11.7 21.0496 11.56 21.1896C9.63997 23.1596 5.66997 20.9996 5.26997 20.3296C5.08997 20.0496 5.12997 19.6596 5.30997 19.4496C5.49997 19.2496 5.92997 19.3796 5.94997 19.3896Z" />
    </Svg>
  );
};
