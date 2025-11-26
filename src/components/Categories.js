
const Categories = ({categories,onSelect}) => {
  return (
    <div id="categories">
        <ul>
            {
            categories.map((item,idx)=>{
                return (
                <li key={idx} onClick={()=>{onSelect(item)}}>{item}</li>)
            })
            }
        </ul>
        </div>
  )
}

export default Categories