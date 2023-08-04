export default function ChildComp({childData}){
    const updateParent = () => {
        childData("This is my data");
    }
    return(
        <button onClick={updateParent}>update data</button>
    )
}