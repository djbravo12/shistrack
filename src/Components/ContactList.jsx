const ContactList = ({ contact }) => {


    return (<>

        <h1 className="">Contact List</h1>
        <div>
            <span>First Name</span>
            <span>Last Name</span>
            <span>DOB</span>
            <span>Parent Contact Number</span>
            <span>Class</span>
        </div>

        <div>
            <span>Vineet </span>
            <span>Kumar</span>
            <span>12-Dec-96</span>
            <span>+919650546430</span>
            <span>6th</span>
        </div>
        <div>
            <span>Preeti </span>
            <span>Singh</span>
            <span>31-Mar-00</span>
            <span>7404713758</span>
            <span>Nursery</span>
        </div>
        <div>
            <span>Divya</span>
            <span>Singh</span>
            <span>07-July-93</span>
            <span>9991007223</span>
            <span>10th</span>
        </div>

    </>)
}

export default ContactList