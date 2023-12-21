const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const infoToast = (toast, text) => {
  toast({
    title: text,
    status: "info",
    isClosable: true,
  });
};

const errorToast = (toast, text) => {
  toast({
    title: text,
    status: "error",
    isClosable: true,
  });
};

const successToast = (toast, text) => {
  toast({
    title: text,
    status: "success",
    isClosable: true,
  });
};

export { validateEmail, infoToast, errorToast, successToast };
