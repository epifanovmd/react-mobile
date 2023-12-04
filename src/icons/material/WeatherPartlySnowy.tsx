import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../components';

export const WeatherPartlySnowyIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg
      viewBox="0 0 24 24"
      style={style}
      {...ownProps}
      fill={ownProps?.fill || ownProps?.color || '#ffffff'}
    >
      <Path d="M6.00006 19.0298C5.46963 19.0298 4.96092 18.8191 4.58584 18.4441C4.21077 18.069 4.00006 17.5603 4.00006 17.0298C4.00006 15.9198 4.90006 15.0298 6.00006 15.0298H8.00006C8.00006 12.8098 9.79006 11.0298 12.0001 11.0298C13.0609 11.0298 14.0783 11.4513 14.8285 12.2014C15.5786 12.9516 16.0001 13.969 16.0001 15.0298V17.0298H19.0001C19.2653 17.0298 19.5196 17.1352 19.7072 17.3227C19.8947 17.5103 20.0001 17.7646 20.0001 18.0298C20.0001 18.5698 19.5501 19.0298 19.0001 19.0298H17.0001C17.0001 19.0298 16.0001 19.0298 16.0001 20.0298C16.0001 21.0298 17.0001 21.0298 17.0001 21.0298H19.0001C19.7957 21.0298 20.5588 20.7138 21.1214 20.1512C21.684 19.5886 22.0001 18.8255 22.0001 18.0298C22.0001 16.3698 20.6601 15.0298 19.0001 15.0298C18.6501 15.0298 18.3101 15.0798 18.0001 15.1898V15.0298C18.0001 13.2098 17.1901 11.5798 15.9201 10.4998C16.3501 8.04984 15.1001 5.52984 12.7501 4.49984C9.97006 3.26984 6.72006 4.52984 5.50006 7.27984C4.60006 9.26984 5.00006 11.4698 6.27006 13.0298H6.00006C3.79006 13.0298 2.00006 14.8098 2.00006 17.0298C2.00006 18.0907 2.42149 19.1081 3.17163 19.8583C3.92178 20.6084 4.93919 21.0298 6.00006 21.0298C6.00006 21.0298 7.00006 21.0298 7.00006 20.0298C7.00006 19.0298 6.00006 19.0298 6.00006 19.0298ZM12.0001 9.02984C10.1601 9.02984 8.50006 9.84984 7.41006 11.1598C6.93006 10.2498 6.85006 9.10984 7.31006 8.08984C8.09006 6.32984 10.1601 5.52984 11.9301 6.31984C13.1801 6.88984 13.9401 8.07984 14.0001 9.36984C13.3801 9.14984 12.7001 9.02984 12.0001 9.02984ZM13.5501 2.65984C13.0001 2.41984 12.4501 2.25984 11.8801 2.14984L14.3701 0.839844L15.2701 3.72984C14.7601 3.30984 14.1901 2.94984 13.5501 2.65984ZM6.09006 3.45984C5.60006 3.80984 5.17006 4.20984 4.80006 4.65984L4.91006 1.83984L7.87006 2.52984C7.25006 2.72984 6.65006 3.04984 6.09006 3.45984ZM18.0001 8.72984C17.9101 8.14984 17.7801 7.56984 17.5901 7.02984L19.9701 8.52984L17.9201 10.7598C18.0301 10.0998 18.0501 9.41984 18.0001 8.72984ZM3.04006 10.3198C3.11006 10.9198 3.25006 11.4998 3.43006 12.0298L1.06006 10.5298L3.10006 8.29984C3.00006 8.94984 2.97006 9.63984 3.04006 10.3198ZM8.03006 21.4498C8.13006 21.8398 8.53006 22.0598 8.91006 21.9598L10.5001 21.5398L10.0601 23.1098C9.96006 23.4998 10.1901 23.8998 10.5701 23.9998C10.9501 24.0998 11.3501 23.8698 11.4501 23.4998L11.8701 21.9098L13.0301 23.0698C13.3001 23.3498 13.7701 23.3498 14.0501 23.0698C14.3301 22.7898 14.3301 22.3198 14.0501 22.0498L12.8901 20.8798L14.4701 20.4698C14.8501 20.3698 15.0801 19.9698 15.0001 19.5898C14.8801 19.2098 14.5001 18.9998 14.0901 19.0798L12.5001 19.4998L12.9401 17.9298C13.0401 17.5398 12.8201 17.1498 12.4301 17.0498C12.0501 16.9498 11.6601 17.1698 11.5501 17.5598L11.1401 19.1398L10.0001 17.9698C9.70006 17.6898 9.23006 17.6898 8.95006 17.9698C8.68006 18.2698 8.68006 18.7198 8.95006 18.9998L10.1101 20.1598L8.54006 20.5698C8.15006 20.6798 7.93006 21.0698 8.03006 21.4498Z" />
    </Svg>
  );
};