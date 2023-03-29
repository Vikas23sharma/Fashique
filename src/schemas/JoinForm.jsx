import * as Yup from "yup"

const JoinForm = Yup.object({
    email: Yup.string().email('Invalid email address').required('Please Enter your Email'),
    firstname: Yup.string().min(2).max(25).required("Please Enter your FullName"),
    lastname: Yup.string().min(0).max(25).required("Please Enter your LastName"),
    password: Yup.string().min(6).required("Please Enter your Password"),
    confirmpassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),
    dob: Yup.string().required(),
    gender: Yup.string().required(),
})

export default JoinForm