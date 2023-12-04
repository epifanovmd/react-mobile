import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../src';

export const SourceRepositoryMultipleIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M8 0H20C20.5304 0 21.0391 0.210714 21.4142 0.585786C21.7893 0.960859 22 1.46957 22 2V18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H8C7.46957 20 6.96086 19.7893 6.58579 19.4142C6.21071 19.0391 6 18.5304 6 18V2C6 1.46957 6.21071 0.960859 6.58579 0.585786C6.96086 0.210714 7.46957 0 8 0V0ZM14.75 11.5C17.5 11.5 18.24 9.47 18.43 8.4C19.34 8.11 20 7.26 20 6.25C20 5 19 4 17.75 4C16.5 4 15.5 5 15.5 6.25C15.5 7.19 16.07 8 16.89 8.33C16.67 9 16 10 14 10C12.62 10 11.66 10.35 11 10.84V6.87C11.87 6.56 12.5 5.73 12.5 4.75C12.5 3.5 11.5 2.5 10.25 2.5C9 2.5 8 3.5 8 4.75C8 5.73 8.63 6.56 9.5 6.87V13.13C8.63 13.44 8 14.27 8 15.25C8 16.5 9 17.5 10.25 17.5C11.5 17.5 12.5 16.5 12.5 15.25C12.5 14.32 11.94 13.5 11.13 13.18C11.41 12.5 12.23 11.5 14.75 11.5ZM10.25 14.5C10.4489 14.5 10.6397 14.579 10.7803 14.7197C10.921 14.8603 11 15.0511 11 15.25C11 15.4489 10.921 15.6397 10.7803 15.7803C10.6397 15.921 10.4489 16 10.25 16C10.0511 16 9.86032 15.921 9.71967 15.7803C9.57902 15.6397 9.5 15.4489 9.5 15.25C9.5 15.0511 9.57902 14.8603 9.71967 14.7197C9.86032 14.579 10.0511 14.5 10.25 14.5ZM10.25 4C10.4489 4 10.6397 4.07902 10.7803 4.21967C10.921 4.36032 11 4.55109 11 4.75C11 4.94891 10.921 5.13968 10.7803 5.28033C10.6397 5.42098 10.4489 5.5 10.25 5.5C10.0511 5.5 9.86032 5.42098 9.71967 5.28033C9.57902 5.13968 9.5 4.94891 9.5 4.75C9.5 4.55109 9.57902 4.36032 9.71967 4.21967C9.86032 4.07902 10.0511 4 10.25 4ZM17.75 5.5C17.9489 5.5 18.1397 5.57902 18.2803 5.71967C18.421 5.86032 18.5 6.05109 18.5 6.25C18.5 6.44891 18.421 6.63968 18.2803 6.78033C18.1397 6.92098 17.9489 7 17.75 7C17.5511 7 17.3603 6.92098 17.2197 6.78033C17.079 6.63968 17 6.44891 17 6.25C17 6.05109 17.079 5.86032 17.2197 5.71967C17.3603 5.57902 17.5511 5.5 17.75 5.5ZM16 22V24H4C3.46957 24 2.96086 23.7893 2.58579 23.4142C2.21071 23.0391 2 22.5304 2 22V6H4V22H16Z" />
    </Svg>
  );
};