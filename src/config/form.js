const formConfig = [
    {
        key: "name",
        label: "Name",
        props: {required: true}
    },
    {
        key: "username",
        label: "Username",
        props: {required: true}
    },
    {
        key: "email",
        label: "Email Address",
        type: "email",
        props: {required: true}
    },
    {
        key: "salary",
        label: "Salary",
        props: {required: true}
    }
]

export default formConfig;
