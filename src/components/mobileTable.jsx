
export const MobileTable = ({props}) => {
    
    console.log('props in MobileTable', props)
  
    return <ul>
        {props.map((el) => {return <li key={el.id}>

                <p>Name: {el.name}</p>
                <p>Company: {el.company}</p>
                <p>Phone: {el.phone}</p>
                <p>E-mail: {el.email}</p>
                <p>Country: {el.country}</p>
                <p>Status: {el.status }</p>
                
            </li>
        })}
    </ul>
}