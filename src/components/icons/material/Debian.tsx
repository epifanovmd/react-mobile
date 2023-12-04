import React, { FC } from 'react';
import { FlexSvgProps } from '../types';
import Svg, { Path } from 'react-native-svg';
import { useFlexProps } from '../../flexView';

export const DebianIcon: FC<FlexSvgProps> = props => {
  const { style, ownProps } = useFlexProps(props, { height: 24, width: 24 });

  return (
    <Svg viewBox="0 0 24 24" fill="#ffffff" style={style} {...ownProps}>
      <Path d="M18.5001 10.5704L18.3001 10.9404C18.5601 10.1604 18.4101 9.31039 18.4501 8.57039L18.3801 8.55039C18.3101 6.70039 16.7101 4.73039 15.2901 4.07039C14.0601 3.50039 12.1701 3.40039 11.3001 3.83039C11.4201 3.72039 11.9001 3.68039 11.7501 3.60039C10.3801 3.73039 10.6901 4.07039 9.64005 4.34039C9.35005 4.62039 10.5001 4.12039 9.87005 4.50039C9.31005 4.63039 9.05005 4.38039 8.22005 5.24039C8.29005 5.36039 8.75005 4.89039 8.37005 5.36039C7.58005 5.27039 5.89005 7.16039 5.53005 7.78039L5.72005 7.82039C5.41005 8.59039 5.00005 9.08039 4.95005 9.54039C4.87005 10.6804 4.50005 12.7504 5.03005 13.3904L4.97005 13.9204L5.20005 14.3704L5.08005 14.3804C5.66005 16.2104 5.70005 14.4204 6.47005 16.3204C6.36005 16.2804 6.24005 16.2404 6.08005 16.0004C6.06005 16.1904 6.32005 16.6904 6.62005 17.0804L6.50005 17.2204C6.66005 17.5304 6.82005 17.6004 6.93005 17.7104C6.30005 17.3604 7.50005 18.8404 7.63005 19.0304L7.73005 18.8604C7.71005 19.1004 7.90005 19.4204 8.26005 19.8704L8.56005 19.8604C8.69005 20.1004 9.14005 20.5404 9.41005 20.5604L9.23005 20.8004C9.92005 21.0004 9.56005 21.0904 10.4101 21.3904L10.2401 21.0904C10.6701 21.4604 10.8001 21.7904 11.4101 22.0704C12.2601 22.3704 12.3701 22.2504 13.2301 22.5004C12.5001 22.5004 11.6401 22.5004 11.0601 22.2804C7.10005 21.2104 3.50005 16.5604 3.74005 11.7804C3.68005 10.8104 3.84005 9.60039 3.68005 9.36039C3.90005 8.62039 4.16005 7.72039 4.69005 6.65039C4.65005 6.58039 4.78005 6.86039 5.05005 6.41039C5.21005 6.05039 5.34005 5.66039 5.55005 5.31039L5.65005 5.28039C5.76005 4.67039 7.08005 3.73039 7.50005 3.26039V3.44039C8.36005 2.63039 9.90005 2.09039 10.7601 1.71039C10.5301 1.96039 11.2701 1.68039 11.8001 1.65039L11.3101 1.93039C11.9401 1.77039 11.9101 2.00039 12.5601 1.90039C12.3301 1.93039 12.0601 2.00039 12.1001 2.06039C12.8201 2.14039 12.9401 1.84039 13.6101 2.06039L13.5601 1.86039C14.5001 2.20039 14.6901 2.14039 15.7001 2.68039C16.0601 2.69039 16.1001 2.46039 16.6301 2.68039C16.7301 2.84039 16.6101 2.87039 17.2701 3.27039C17.3401 3.24039 17.1401 3.05039 17.0001 2.90039C18.3001 3.61039 19.7501 5.12039 20.1801 6.74039C19.7701 6.00039 20.1401 7.13039 20.0001 7.07039C20.1801 7.56039 20.3301 8.07039 20.4301 8.60039C20.3101 8.17039 20.0401 7.12039 19.5701 6.45039C19.5401 6.88039 18.9701 6.15039 19.2801 7.11039C19.5001 7.45039 19.3301 6.76039 19.6201 7.36039C19.6201 7.65039 19.7301 7.94039 19.8001 8.31039C19.7001 8.29039 19.5801 7.90039 19.5001 8.00039C19.6001 8.50039 19.7701 8.72039 19.8301 8.76039C19.8001 8.84039 19.7101 8.68039 19.7101 9.00039C19.7501 9.74039 19.9201 9.43039 20.0001 9.46039C19.9101 9.83039 19.5901 10.2504 19.7501 10.8804L19.5501 10.3204C19.5001 10.8504 19.6601 10.9504 19.4201 11.6004C19.6001 11.0004 19.5801 10.5004 19.4101 10.7504C19.5001 11.5704 18.7601 12.2004 18.8301 12.7304L18.6201 12.4404C18.0501 13.2704 18.6101 12.8904 18.2201 13.5004C18.3601 13.2704 18.1501 13.4204 18.3301 13.1404C18.2101 13.1504 17.7801 13.6704 17.3901 13.9704C15.8501 15.2004 14.0001 15.3704 12.2401 14.7004H12.2301C12.2401 14.6604 12.2301 14.6104 12.1101 14.5304C10.6001 13.3804 9.71005 12.4004 10.0001 10.1204C10.2501 9.95039 10.3101 9.00039 10.8401 8.67039C11.1601 7.96039 12.1201 7.31039 13.1501 7.29039C14.2001 7.23039 15.0901 7.85039 15.5401 8.43039C14.7201 7.68039 13.4001 7.45039 12.2601 8.00039C11.1101 8.53039 10.4201 9.80039 10.5001 11.0704C10.5601 11.0004 10.6001 11.0504 10.6201 10.8904C10.5901 13.3604 13.2801 15.1704 15.2201 14.2604L15.2501 14.3104C16.0301 14.0904 15.9301 13.9204 16.4401 13.5604C16.4001 13.6504 16.1001 13.8604 16.2801 13.8604C16.5301 13.8004 17.3101 13.0704 17.7001 12.7304C17.8701 12.3504 17.6001 12.5004 17.8501 12.0404L18.1501 11.8904C18.3201 11.4104 18.5001 11.1404 18.5001 10.5704Z" />
    </Svg>
  );
};
