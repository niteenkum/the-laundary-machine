import * as Yup from 'yup';
export const loginToEmail = Yup.object().shape({
  pass: Yup.string().required("E 'password required"),
  email: Yup.string('Email required')
    .email("L'email must be a valid email")
    .required(),
});

export const loginToPhone = Yup.object().shape({
  pass: Yup.string().required("E 'password required"),
  email: Yup.string().test(
    'The phone must contain at least 10 digits',
    val => val.length >= 10,
  ),
});
export const ProfileSchema = Yup.object().shape({
  birthday: Yup.string().required('Birthday is required'),
  gender: Yup.string().required('Il genere è richiesto'),
  email: Yup.string().test(
    'The phone must contain at least 10 digits',
    val => val.length >= 10,
  ),
  phone: Yup.string().required('Phone required'),
  lname: Yup.string().required('Cognome è richiesto'),
  fname: Yup.string().required('Name required'),
});

export const changePassSchema = Yup.object().shape({
  newpass: Yup.string().required('Password is required'),
  //val => val.length >= 6,
  //
  old: Yup.string().required('Password is required'),
});
