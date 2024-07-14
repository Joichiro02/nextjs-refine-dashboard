"use client";
import { AuthPage as AuthPageBase } from "@refinedev/antd";
import type { AuthPageProps } from "@refinedev/core";

// For demo purposes and to make it easier to test the app, you can use the following credentials
// export const authCredentials = {
//   email: "michael.scott@dundermifflin.com",
//   password: "demodemo",
// };
export const authCredentials = {
  email: "kevin.malone@dundermifflin.com",
  password: "kevin.malone@dundermifflin.com",
};

export const AuthPage = (props: AuthPageProps) => {
  return (
    <AuthPageBase
      {...props}
      formProps={{
        initialValues: { email: authCredentials.email, password: authCredentials.password },
      }}
    />
  );
};
