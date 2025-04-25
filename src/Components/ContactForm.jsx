import { useState } from 'react';






const ContactForm = ({ setContacts }) => {

    // Student Details intital state
    const [FormData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        dateOfBirth: "",
        bloodGroup: "",
        classesEnrolled: "",
        fatherName: "",
        motherName: "",
        parentPhoneNumber: "",
        parentEmailAddress: "",
        address: {
            street: "",
            city: "",
            state: "",
            pinCode: ""
        },
        enrollmentDate: "",
        termAndCondition: false

    })


    // Error initial state  
    const [error, setError] = useState({
        firstNameError: { isError: false, errorMesseges: "First Name is required" },
        lastNameError: { isError: false, errorMesseges: "last Name is required" },
        emailError: { isError: false, errorMesseges: "Email is required" },
        dobError: { isError: false, errorMesseges: "dob is required" },
        enrollmentDateError: { isError: false, errorMesseges: "Enrollment is required" },
        classesEnrolledError: { isError: false, errorMesseges: "Class is required" },
        fatherNameError: { isError: false, errorMesseges: "Father Name is required" },
        motherNameError: { isError: false, errorMesseges: "Mother Name is required" },
        parentPhoneNumberError: { isError: false, errorMesseges: "Parent Contact Number is required" },
        parentEmailAddressError: { isError: false, errorMesseges: "Parent Email is required" },
        cityError: { isError: false, errorMesseges: "City is required" },
        stateError: { isError: false, errorMesseges: "State is required" },

    })



    // Form validation

    const formValidation = (formData) => {
        if (!formData.firstName?.trim()) {
            console.log(error.firstNameError.errorMesseges)
        }
        if (!formData.lastName?.trim()) {
            console.log(error.lastNameError.errorMesseges)
        }
        if (!formData.email?.trim()) {  
            console.log(error.emailError.errorMesseges)
        }   
        if (!formData.dateOfBirth?.trim()) {
            console.log(error.dobError.errorMesseges)
        }
        if (!formData.enrollmentDate?.trim()) {
            console.log(error.enrollmentDateError.errorMesseges)
        }   
        if (!formData.classesEnrolled?.trim()) {
            console.log(error.classesEnrolledError.errorMesseges)
        }   
        if (!formData.fatherName?.trim()) {
            console.log(error.fatherNameError.errorMesseges)
        }

        if (!formData.motherName?.trim()) {
            console.log(error.motherNameError.errorMesseges)
        }
        if (!formData.parentPhoneNumber?.trim()) {
            console.log(error.parentPhoneNumberError.errorMesseges)
        }
        if (!formData.parentEmailAddress?.trim()) {
            console.log(error.parentEmailAddressError.errorMesseges)
        }
    
        if (!formData.address.state?.trim()) {
            console.log(error.stateError.errorMesseges)
        }
        
        if (!formData.address.city?.trim()) {
            console.log(error.cityError.errorMesseges)
        }
        if (!formData.termAndCondition) {
            console.log("Privacy policy is required")
        }

    }



    // update the FormData state on change event
    const onChangeEvent = (e) => {
        // setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

        switch (e.target.name) {
            case "firstName":
                if (e.target.value.trim().length > 0) {
                    setError(prev => ({ ...prev, firstNameError: { ...prev.firstNameError, isError: false } }))
                    // console.log(e.target.value)
                }
                setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
                break;
            case "lastName":
                if (e.target.value.trim().length > 0) {
                    setError(prev => ({ ...prev, lastNameError: { ...prev.lastNameError, isError: false } }))
                    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
                    // console.log(e.target.value)
                }
                break;
            case "email":
                if (e.target.value.trim().length > 0) {
                    setError(prev => ({ ...prev, emailError: { ...prev.emailError, isError: false } }))
                    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
                    // console.log(e.target.value)
                }
                break;
            case "dateOfBirth":
                if (e.target.value.trim().length > 0) {
                    setError(prev => ({ ...prev, dobError: { ...prev.dobError, isError: false } }))
                    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
                    // console.log(e.target.value)
                }
                break;
            case "bloodGroup":
                if (e.target.value.trim().length > 0) {
                    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
                    console.log(e.target.value)
                }
                break;
            case "classesEnrolled":
                if (e.target.value.trim().length > 0) {
                    setError(prev => ({ ...prev, classesEnrolledError: { ...prev.classesEnrolledError, isError: false } }))
                    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
                    console.log(e.target.value)
                }
                break;
            case "fatherName":
                if (e.target.value.trim().length > 0) {
                    setError(prev => ({ ...prev, fatherNameError: { ...prev.fatherNameError, isError: false } }))
                    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
                    console.log(e.target.value)
                }
                break;
            case "motherName":
                if (e.target.value.trim().length > 0) {
                    setError(prev => ({ ...prev, motherNameError: { ...prev.motherNameError, isError: false } }))
                    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
                    console.log(e.target.value)
                }
                break;
            case "parentPhoneNumber":
                if (e.target.value.trim().length > 0) {
                    setError(prev => ({ ...prev, parentPhoneNumberError: { ...prev.parentPhoneNumberError, isError: false } }))
                    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
                    console.log(e.target.value)
                }
                break;
            case "parentEmailAddress":
                if (e.target.value.trim().length > 0) {
                    setError(prev => ({ ...prev, parentEmailAddressError: { ...prev.parentEmailAddressError, isError: false } }))
                    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
                    console.log(e.target.value)
                }
                break;
            case "street":
                if (e.target.value.trim().length > 0) {

                    setFormData(prev => ({ ...prev, address: { ...prev.address, [e.target.name]: e.target.value } }));
                    console.log(e.target.value)
                }
                break;
            case "city":
                if (e.target.value.trim().length > 0) {
                    setError(prev => ({ ...prev, cityError: { ...prev.cityError, isError: false } }))
                    setFormData(prev => ({ ...prev, address: { ...prev.address, [e.target.name]: e.target.value } }));
                    console.log(e.target.value)
                }
                break;
            case "state":
                if (e.target.value.trim().length > 0) {
                    setError(prev => ({ ...prev, stateError: { ...prev.stateError, isError: false } }))
                    setFormData(prev => ({ ...prev, address: { ...prev.address, [e.target.name]: e.target.value } }));
                    console.log(e.target.value)
                }
                break;
            case "pincode":
                if (e.target.value.trim().length > 0) {
                    setFormData(prev => ({ ...prev, address: { ...prev.address, [e.target.name]: e.target.value } }));
                    console.log(e.target.value)
                }
                break;

        }
    }



    // Form submission event
    const handleformSubmission = () => {
        // e.preventDefault(); 

        formValidation(FormData)
        console.log("Form data::", FormData)

    }



    return <>

        <section>
            <h1>Add New student Details</h1>


            <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4' role="alert">
                <div className={` ${error.firstNameError.isError ? 'block' : 'hidden'}`}>First Name is required</div>

            </div>

            <form action={handleformSubmission}>

                {/* Basic Student Details */}
                <fieldset>
                    <legend>Student Details</legend>

                    {/* First Name Input field */}
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name='firstName' className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.firstNameError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
                            }`}
                            onChange={e => onChangeEvent(e)}
                            value={FormData.firstName} />
                    </div>


                    {/* Last Name Input field */}
                    <div>
                        <label htmlFor="lastName">last Name</label>
                        <input type="text" name='lastName' className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.lastNameError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
                            }`}
                            onChange={e => onChangeEvent(e)}
                            value={FormData.lastName} />

                    </div>

                    {/* Email Input field */}
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.emailError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
                            }`}
                            onChange={e => onChangeEvent(e)}
                            value={FormData.email} />

                    </div>


                    {/* DOB Input field */}
                    <div>
                        <label htmlFor="dateOfBirth">Date of Birth</label>
                        <input type="date" name='dateOfBirth' className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.dobError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
                            }`}
                            onChange={e => onChangeEvent(e)}
                            value={FormData.dateOfBirth} />
                    </div>


                    {/* enrollment Date Input field */}
                    <div>
                        <label htmlFor="enrollmentDate">Date of Addmission</label>
                        <input type="date" name='enrollmentDate' className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.enrollmentDateError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
                            }`}
                            onChange={e => onChangeEvent(e)}
                            value={FormData.enrollmentDate} />
                    </div>

                    {/* Blood Group Input field */}
                    <div>
                        <label htmlFor="bloodGroup">Blood Group
                            <select value={FormData.bloodGroup} name="bloodGroup" onChange={e => onChangeEvent(e)}>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </label>
                    </div>


                    {/* Class Input */}
                    <div>
                        <label htmlFor="classesEnrolled">Select Class</label>
                        <select value={FormData.classesEnrolled} name="classesEnrolled" onChange={e => onChangeEvent(e)}>
                            <option value="1st">1st</option>
                            <option value="2nd">2nd</option>
                            <option value="3rd">3rd</option>
                            <option value="4th">4th</option>
                            <option value="5th">5th</option>
                        </select>
                    </div>
                </fieldset>


                {/* Parent Details */}
                <fieldset>
                    <legend>Parents Details</legend>


                    {/* father Details */}
                    <div>
                        <label htmlFor="fatherName">Father's Name</label>
                        <input type="text" name='fatherName' className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.fatherNameError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
                            }`}
                            onChange={e => onChangeEvent(e)}
                            value={FormData.fatherName} />
                    </div>


                    {/* Mother Details */}
                    <div>
                        <label htmlFor="motherName">Mother's Name</label>
                        <input type="text" name='motherName' className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.motherNameError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
                            }`}
                            onChange={e => onChangeEvent(e)}
                            value={FormData.motherName} />
                    </div>




                    {/* Parents Phone Details */}
                    <div>
                        <label htmlFor="parentPhoneNumber">Parent's Contact Number</label>
                        <input type="text" name='parentPhoneNumber' className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.parentPhoneNumberError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
                            }`}
                            onChange={e => onChangeEvent(e)}
                            value={FormData.parentPhoneNumber} />
                    </div>

                    {/* Parents Email Details */}
                    <div>
                        <label htmlFor="parentEmailAddress">Parent's Email</label>
                        <input type="text" name='parentEmailAddress' className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.parentEmailAddressError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
                            }`}
                            onChange={e => onChangeEvent(e)}
                            value={FormData.parentEmailAddress} />
                    </div>
                </fieldset>



                {/* Student Address */}
                <fieldset>
                    <legend>Address</legend>

                    {/* Street input Address */}
                    <div>
                        <label htmlFor="street">Street</label>
                        <input type="text" name='street' className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300`}
                            onChange={e => onChangeEvent(e)}
                            value={FormData.address.street} />
                    </div>

                    {/* City input Address */}
                    <div>
                        <label htmlFor="city">city</label>
                        <input type="text" name='city' className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.cityError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
                            }`}
                            onChange={e => onChangeEvent(e)}
                            value={FormData.address.city} />
                    </div>


                    {/* state input Address */}
                    <div>
                        <label htmlFor="state">State</label>
                        <input type="text" name='state' className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.stateError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
                            }`}
                            onChange={e => onChangeEvent(e)}
                            value={FormData.address.state} />
                    </div>


                    {/* pincode input Address */}
                    <div>
                        <label htmlFor="pincode">Pincode</label>
                        <input type="text" name='pincode' className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.firstNameError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
                            }`}
                            onChange={e => onChangeEvent(e)}
                            value={FormData.address.pincode} />
                    </div>

                </fieldset>
                <button type='submit' className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">Sumbit</button>
            </form>
        </section>

    </>
}





// const ContactForm = ({ setContacts }) => {

//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         fatherName: "",
//         motherName: "",
//         classesEnrolled: "",
//         dob: "",
//         enrollmentDate: "",
//         street: "",
//         city: "",
//         state: "",
//         pinCode: "",
//         privacyPolicy: false
//     });

//     const [error, setError] = useState({
//         firstNameError: { isError: false, errorMesseges: "First Name is required" },
//         lastNameError: { isError: false, errorMesseges: "Last Name is required" },
//         emailError: { isError: false, errorMesseges: "Email is required" },
//         fatherNameError: { isError: false, errorMesseges: "Father Name is required" },
//         classesEnrolledError: { isError: false, errorMesseges: "Classes Enrolled is required" },
//         enrollmentDateError: { isError: false, errorMesseges: "Enrollment Date is required" },
//         streetError: { isError: false, errorMesseges: "Street is required" },
//         dobError: { isError: false, errorMesseges: "Date of Birth is required" },
//         stateError: { isError: false, errorMesseges: "State is required" },
//         privacyPolicyError: { isError: false, errorMesseges: "privacy is required" },
//         // sumbitButtonDisable: true
//     })

//     // Form validation on blur event
//     const onBlurEvent = (formData) => {
//         if (!formData.firstName?.trim()) {
//             setError(prev => ({ ...prev, firstNameError: { ...prev.firstNameError, isError: true } }))
//         }
//         if (!formData.lastName?.trim()) {
//             setError(prev => ({ ...prev, lastNameError: { ...prev.lastNameError, isError: true } }))
//         }
//         if (!formData.email?.trim()) {
//             // console.log(formData.email)
//             setError(prev => ({ ...prev, emailError: { ...prev.emailError, isError: true, errorMesseges: "Email address is required" } }))
//         }
//         else if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email?.trim()))) {
//             console.log("Email is invalid")
//             // console.log(formData.email?.trim())
//             setError(prev => ({ ...prev, emailError: { ...prev.emailError, isError: true, errorMesseges: "Email is invalid" } }))
//         }
//         if (!formData.classesEnrolled?.trim()) {
//             setError(prev => ({ ...prev, classesEnrolledError: { ...prev.classesEnrolledError, isError: true } }))
//         }
//         if (!formData.dob?.trim()) {
//             setError(prev => ({ ...prev, dobError: { ...prev.dobError, isError: true } }))
//         }
//         if (!formData.state?.trim()) {
//             setError(prev => ({ ...prev, stateError: { ...prev.stateError, isError: true } }))
//         }

//         if (!formData.enrollmentDateError?.trim()) {
//             setError(prev => ({ ...prev, enrollmentDateError: { ...prev.enrollmentDateError, isError: true } }))
//         }
//         if (!formData.privacyPolicy) {
//             // console.log("Privacy policy is required")
//             // console.log(formData.privacyPolicy)
//             setError(prev => ({ ...prev, privacyPolicyError: { ...prev.privacyPolicyError, isError: true, errorMesseges: "invalid" } }))
//         }

//         // console.log(formData.privacyPolicy)
//     }


//     const onChangeEvent = (e) => {
// // 
//         switch (e.target.name) {
//             case "firstName":
//                 if (e.target.value.trim().length > 0) {
//                     setError(prev => ({ ...prev, firstNameError: { ...prev.firstNameError, isError: false } }))
//                 }
//                 break;
//             case "lastName":
//                 if (e.target.value.trim().length > 0) { setError(prev => ({ ...prev, lastNameError: { ...prev.lastNameError, isError: false } })) }
//                 break;
//             case "email":
//                 if (e.target.value.trim().length > 0) { setError(prev => ({ ...prev, emailError: { ...prev.emailError, isError: false } })) }
//                 break;
//             case "dob":
//                 break;
//             case "clientLocation":
//                 break;
//             case "message":
//                 break;
//             case "privacyPolicy":
//                 console.log(e.target.name)
//                 console.log(e.target.value)
//                 console.log(e.target.type)
//                 console.log(e.target.checked)
//                 if (e.target.checked) { setError(prev => ({ ...prev, privacyPolicyError: { ...prev.privacyPolicyError, isError: false } })) }
//                 break;
//             default:
//                 break;
//         }

//         setFormData(prev => ({ ...prev, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));
//     }


//     const handleSubmit = (e) => {
//         // e.preventDefault();
//         onBlurEvent(formData)

//         // console.log(error)

//         console.log(error.firstNameError.isError)

//         if (error.firstNameError.isError && error.lastNameError.isError && error.emailError.isError && error.privacyPolicyError.isError) {
//             console.log(error.firstNameError.isError && error.lastNameError.isError && error.emailError.isError && error.privacyPolicyError)

//             console.log("Error:: Form inputs are empty")
//         } else {
//             // for (const pair of e.entries()) {
//             console.log("pair[0], pair[1]");
//             // }
//             setContacts(prev => ([...prev, Object.fromEntries(e.entries())]))
//             setFormData(prev => ({
//                 ...prev, firstName: "",
//                 lastName: "",
//                 email: "",
//                 dob: "",
//                 clientLocation: "",
//                 street: "",
//                 city: "",
//                 state: "",
//                 message: "",
//                 privacyPolicy: false
//             }))
//         }



//         // console.log("Form data::", contacts)

//         // setContacts(prev => ([...prev, Object.fromEntries(e.entries())]))



//         // console.log(typeof e.entries())
//         // if()

//     };


//     return (
//         <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
//             <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm p-6 sm:p-8">
//                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">We'd love to help</h2>
//                 <p className="text-gray-600 mb-6 sm:mb-8">Reach out and we'll get in touch within 24 hours.</p>




//                 {/* Error Box */}

//                 <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4' role="alert">
//                     <span className={` ${error.firstNameError.isError ? 'block' : 'hidden'} sm:inline`}>First Name is required</span>
//                     <span className={` ${error.lastNameError.isError ? 'block' : 'hidden'} sm:inline`} >Last Name is required</span>
//                     <span className={` ${error.emailError.isError ? 'block' : 'hidden'} sm:inline`} >Email is required</span>
//                     <span className={` ${error.classesEnrolledError.isError ? 'block' : 'hidden'} sm:inline`} >Classes Enrolled is required</span>
//                     <span className={` ${error.dobError.isError ? 'block' : 'hidden'} sm:inline`} >Date of Birth is required</span>
//                     <span className={` ${error.stateError.isError ? 'block' : 'hidden'} sm:inline`} >State is required</span>
//                     <span className={` ${error.privacyPolicyError.isError ? 'block' : 'hidden'} sm:inline`} >privacy is required</span>

//                 </div>



//                 {/* Form Start Here  */}
//                 <form action={handleSubmit} className="space-y-6">


//                     {/* Name Group */}
//                     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
//                         {/* First Name Input */}
//                         <div> <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First name</label>
//                             <input
//                                 type="text"
//                                 // className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 // required
//                                 name='firstName'
//                                 onChange={(e) => onChangeEvent(e)}
//                                 // onBlur={(e) => onBlurEvent(e)}
//                                 value={formData.firstName}
//                                 className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.firstNameError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
//                                     }`}
//                             />
//                             <span className="text-sm text-red-500">{error.firstNameError.isError && error.firstNameError?.errorMesseges}</span>
//                         </div>

//                         {/* Last Name Input */}
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor='lastName'>Last name</label>
//                             <input
//                                 type="text"
//                                 className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.lastNameError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
//                                     }`}
//                                 // required
//                                 name='lastName'
//                                 onChange={(e) => onChangeEvent(e)}
//                                 value={formData.lastName}
//                             />
//                             <span className="text-sm text-red-500">{error.lastNameError.isError && error.lastNameError?.errorMesseges}</span>
//                         </div>
//                     </div>


//                     {/* Parents Details */}
//                     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
//                         <div>
//                             <label htmlFor="fathersName">Father's Name</label>
//                             <input type="text" name="fatherName" onChange={(e) => onChangeEvent(e)}
//                                 // onBlur={(e) => onBlurEvent(e)}
//                                 value={formData.fatherName}
//                                 className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.fatherNameError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
//                                     }`} />
//                         </div>
//                         <div>
//                             <label htmlFor="motherName">Mother's Name</label>
//                             <input type="text" name="motherName" onChange={(e) => onChangeEvent(e)}
//                                 // onBlur={(e) => onBlurEvent(e)}
//                                 value={formData.motherName}
//                                 className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.fatherNameError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
//                                     }`} />
//                         </div>
//                     </div>




//                     {/* Email Input */}
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                         <input
//                             type="email"
//                             className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.emailError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
//                                 }`}
//                             // required
//                             name='email'
//                             onChange={(e) => onChangeEvent(e)}
//                             value={formData.email}
//                         />
//                         <span className="text-sm text-red-500">{error.emailError.isError && error.emailError?.errorMesseges}</span>
//                     </div>



//                     {/* Class Details */}

//                     <div>
//                         <h1>Class Details</h1>
//                         <div >
//                             <label htmlFor="classesEnrolled" className="block text-sm font-medium text-gray-700 mb-2" >
//                                 Select Class :-
//                             </label>
//                             <select className='w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
//                                 <option value="class1">Class 1</option>
//                                 <option value="class2">Class 2</option>
//                                 <option value="class3">Class 3</option>
//                                 <option value="class4">Class 4</option>
//                             </select></div>


//                     </div>





//                     {/* DOB */}
//                     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
//                         <div >
//                             <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
//                             <input
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                 onChange={(e) => onChangeEvent(e)}
//                                 name='dob'
//                                 value={formData.dob}
//                                 type='date'
//                             >
//                             </input>
//                         </div>

//                         <div >
//                             <label htmlFor="enrollmentDate" className="block text-sm font-medium text-gray-700 mb-2">Enrollment Date</label>
//                             <input
//                                 className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
//                                 onChange={(e) => onChangeEvent(e)}
//                                 name='enrollmentDate'
//                                 value={formData.enrollmentDate}
//                                 type='date'
//                             >

//                             </input>
//                         </div>
//                     </div>

//                     {/* Address */}

//                     <div>
//                         <h1>Address</h1>

//                         {/* Street */}
//                         <div className='grid grid-cols-2 gap-4 ' >
//                             <div>
//                                 <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-2">Street</label>
//                                 <input
//                                     className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.firstNameError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
//                                         }`}

//                                     // required
//                                     name='street'
//                                     onChange={(e) => onChangeEvent(e)}
//                                     value={formData.street}
//                                 ></input>
//                             </div>

//                             {/* City */}
//                             <div>
//                                 <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City</label>
//                                 <input
//                                     className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.firstNameError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
//                                         }`}
//                                     // required
//                                     name='city'
//                                     onChange={(e) => onChangeEvent(e)}
//                                     value={formData.city}
//                                 ></input>
//                             </div>

//                             {/* State */}
//                             <div>
//                                 <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">State</label>
//                                 <input
//                                     className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.firstNameError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
//                                         }`}

//                                     // required
//                                     name='state'
//                                     onChange={(e) => onChangeEvent(e)}
//                                     value={formData.state}
//                                 ></input>
//                             </div>

//                             {/* Pin Code */}
//                             <div>
//                                 <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700 mb-2">Pin Code</label>
//                                 <input
//                                     className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${error.firstNameError.isError ? "border-red-500 focus:ring-red-500 focus:border-red-500" : "border-gray-300"
//                                         }`}
//                                     // required
//                                     name='pinCode'
//                                     onChange={(e) => onChangeEvent(e)}
//                                     value={formData.pinCode}
//                                 ></input>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Privacy Policy */}
//                     <div className="flex items-center">
//                         <input
//                             type="checkbox"
//                             className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
//                             // required
//                             id="privacyPolicy"
//                             name="privacyPolicy"
//                             onChange={(e) => onChangeEvent(e)}
//                             checked={formData.privacyPolicy}
//                         />

//                         <label htmlFor="privacyPolicy" className={`ml-2 text-sm text-gray-600 ${error.privacyPolicyError.isError ? "text-red-500" : "text-black"}`}>

//                             You agree to our friendly privacy policy
//                         </label>
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
//                     // disabled={error.sumbitButtonDisable}
//                     >
//                         Send message
//                     </button>

//                 </form>

//             </div>
//         </div >
//     );
// };

export default ContactForm;