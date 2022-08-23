const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const emailIsValid = (email) => {
  return regex.test(email);
};

export default emailIsValid;
