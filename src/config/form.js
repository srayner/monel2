const formConfig = [
    {
        key: "name",
        label: "Name",
        props: {required: true}
    },
    {
        key: "age",
        label: "Age",
        type: "number"
    },
    {
        key: "rating",
        label: "Rating",
        type: "number",
        props: {min: 0, max: 5}
    },
    {
        key: "qualification",
        label: "Qualification"
    }
]

export default formConfig;
