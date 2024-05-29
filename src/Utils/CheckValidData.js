import React from "react";

export const CheckValidData = (email, password, name) => {
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  const namePattern = /^[a-zA-Z]{3,}/;

  const isEmailValid = emailPattern.test(email);
  const isPasswordValid = passwordPattern.test(password);
  const isName = namePattern.test(name);

  if (!isEmailValid && !isPasswordValid) {
    return "Email not valid & Password not valid";
  } else if (!isEmailValid) {
    return "Email not valid";
  } else if (!isPasswordValid) {
    return "Password not valid";
  } else if (!isName) {
    return "Name is not valid";
  } else {
    return null;
  }
};
