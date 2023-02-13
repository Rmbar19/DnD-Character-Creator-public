import React from 'react'

const DeleteCharacter = (props) => {
  return (
    <div style={{display:'inline-flex'}}>
        <div style={{color:'red', fontWeight:'bold', marginLeft:'1vw'}} onClick={() => {
            let imsure = window.confirm('Are you sure you wanna delete ' + props.name)

            if (imsure) {
               fetch(`http://localhost:8080/user-character/delete/${props.name}`, {
                method:'DELETE'
            })
            .then(() => {
                props.setUpdateCharSheets(!props.updateCharSheets)
            }) 
            }
            
        }}>x</div>
    </div>
)
}

export default DeleteCharacter
