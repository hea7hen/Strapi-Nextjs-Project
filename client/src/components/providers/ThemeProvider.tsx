export interface ThemeConfig {
    primary: string;
    secondary: string;
    fonts: {
      primary: string;
      secondary: string;
    };
    components: {
      navbar: {
        logoPosition: 'left' | 'center';
        ctaVariant: 'filled' | 'outlined';
      };
    };
  }
  
  export interface ComponentConfig {
    __component: string;
    [key: string]: unknown;
  }