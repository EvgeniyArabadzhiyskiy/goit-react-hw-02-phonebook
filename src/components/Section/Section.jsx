import {MainSection,SectionTitle} from './Section.styled'

const Section = ({title, children}) => {
    return (
        <MainSection>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </MainSection>
    )
}

export default Section