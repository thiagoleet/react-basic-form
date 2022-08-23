import useInput from "../hooks/use-input";
import emailIsValid from "../helpers/emailIsValid";

const setClasses = (hasError) => {
  if (hasError) {
    return "form-control invalid";
  }
  return "form-control";
};

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  // firstName
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(isNotEmpty);

  // lastName
  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);

  // emailAddress
  const {
    value: emailAddress,
    isValid: enteredEmailAddressIsValid,
    hasError: emailAddressHasError,
    valueChangeHandler: emailAddressChangedHandler,
    inputBlurHandler: emailAddressInputBlurHandler,
    reset: resetEmailAddressInput,
  } = useInput((value) => isNotEmpty(value) && emailIsValid(value));

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && enteredEmailAddressIsValid) {
    formIsValid = true;
  }

  const formSubmitionHandler = (event) => {
    event.preventDefault();

    if (firstNameHasError) {
      return;
    }

    if (lastNameHasError) {
      return;
    }

    if (emailAddressHasError) {
      return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(emailAddress);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailAddressInput();
  };

  const firstNameInputClasses = setClasses(firstNameHasError);
  const lastNameInputClasses = setClasses(lastNameHasError);
  const emailAddressInputClasses = setClasses(emailAddressHasError);

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameChangedHandler}
            onBlur={firstNameInputBlurHandler}
            value={firstName}
          />
          {firstNameHasError && (
            <p className="error-text">First Name should not be empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangedHandler}
            onBlur={lastNameInputBlurHandler}
            value={lastName}
          />
          {lastNameHasError && (
            <p className="error-text">Last Name should not be empty</p>
          )}
        </div>
      </div>
      <div className={emailAddressInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailAddressChangedHandler}
          onBlur={emailAddressInputBlurHandler}
          value={emailAddress}
        />
        {emailAddressHasError && <p className="error-text">Invalid email</p>}
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
