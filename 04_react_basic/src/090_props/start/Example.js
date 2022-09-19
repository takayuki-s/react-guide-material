import Child from "./components/Child";

const Example = () => {
    const hello = (arg) => `Hello ${arg}`;
    return (
        <>
            <Child 
                color="blue"
                fn={hello}
                bool
                obj={{ name: 'Tom', age: 18 }}
            />
            <Child color="red" />
        </>
    )
};

export default Example;
