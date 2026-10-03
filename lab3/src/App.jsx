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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  const sum = props.parts[0].units + props.parts[1].units + props.parts[2].units
  return <p>Number of units - {sum}</p>
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
  
  const parts = [
    { code: 'IT317', name: 'Project Management', units: 3 },
    { code: 'IT365', name: 'Data Analytics 1', units: 3 },
    { code: 'CSIT327', name: 'Information Management 2', units: 3 }
  ]

  const myName = 'Eleonora Sayson'
  const myCourseCode = 'CSIT340'
  const mySection = 'G7'

  return (  
    <div>
      <Header courseName={courseName} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer fullName={myName} courseCode={myCourseCode} section={mySection} />
    </div>
  )
}

export default App