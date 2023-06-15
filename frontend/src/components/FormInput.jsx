
export default function FormInput({labelfor,labelName,type,placeholder,name,onchange}) {
  return (
    <div>
        <label htmlFor={labelfor}>{labelName}</label>
        <input type={type} placeholder={placeholder} name={name} onChange={onchange} />
    </div>
  )
}
