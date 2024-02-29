import { DefaultTheme } from 'styled-components';

export interface AppColors {
  primary: string;
  secondary: string;
  background: string;
}

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#F8A325',
    secondary: '#333333',
    background: '#FFFFFF',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#28a745',
    secondary: '#ffc107',
    background: '#212529',
  },
};
