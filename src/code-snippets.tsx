import React, { PropsWithChildren, ReactElement } from 'react';

// How to define Functional Component with Generic Type:

// Method 1 in tsx file using type declaration
export const FC1: <T, >( props: PropsWithChildren<T>, context?: any ) => ReactElement | null = ( props ) => {
  return (
    <span>FC1</span>
  );
};

// Method 2 in tsx file without type declaration. Shorter better
export const FC2 = <T, >( props: PropsWithChildren<T>, context?: any ): ReactElement | null => {
  return (
    <span>FC2</span>
  );
};
