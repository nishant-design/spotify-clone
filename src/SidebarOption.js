import './SidebarOption.css';

function SidebarOption({title, Icon}){
    return(
        <div className="sidebarOption">

            {Icon && <Icon className="sidebarOption__icon"/>} 

            {Icon ? <h5 className="sidebarOption__title">{title}</h5> : <p>{title}</p>}
            
        </div>
    )
}

export default SidebarOption;