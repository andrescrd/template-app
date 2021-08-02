import React from "react";

const Logo: React.FC<any> = (props: any) => (
  <img
    alt="Logo"
    src="/static/logo.svg"
    {...props}
  />
);

export default Logo;
