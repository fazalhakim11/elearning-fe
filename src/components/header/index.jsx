
const index = (props) => {
    const singularForm = () =>{
        const name = props.name
        const lowerCase = name.toLowerCase()
        const result = lowerCase.slice(0, -1)

        return result
    }
  return (
    <header className="bg-[#4f7ff0] rounded-b-xl mb-5 p-3">
        <h1 className="text-2xl text-white mb-1 font-bold">{props.name}</h1>
        <p className="text-white text-sm">Please select a {singularForm()} you want to study</p>
    </header>
  )
};

export default index
