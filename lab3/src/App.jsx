const Header = (props) => {
  return <h1>{props.courseName}</h1>
}

const Part = (props) => {
  return (
    <p>{props.part.code} {props.part.name} - {props.part.units} units</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of units - {props.totalUnits}</p>
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.fullName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const courseName = 'CSIT340 - Industry Elective 1'
  
  const part1 = { code: 'IT317', name: 'Project Management', units: 3 }
  const part2 = { code: 'IT365', name: 'Data Analytics 1', units: 3 }
  const part3 = { code: 'CSIT327', name: 'Information Management 2', units: 3 }

  const myName = 'Eleonora Sayson'
  const myCourseCode = 'CSIT340'
  const mySection = 'G7'

  return (  
    <div>
      <Header courseName={courseName} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total totalUnits={part1.units + part2.units + part3.units} />
      <Footer fullName={myName} courseCode={myCourseCode} section={mySection} />
    </div>
  )
}

export default App