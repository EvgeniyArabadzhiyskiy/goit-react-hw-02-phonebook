import stl from './Section.module.css'

const Section = ({title, children}) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Section