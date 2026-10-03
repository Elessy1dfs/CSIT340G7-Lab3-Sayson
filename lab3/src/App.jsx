const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <tr>
      <td style={{ border: '1px solid #ccc', padding: '8px' }}>{props.part.code}</td>
      <td style={{ border: '1px solid #ccc', padding: '8px' }}>{props.part.name}</td>
      <td style={{ border: '1px solid #ccc', padding: '8px' }}>{props.part.units}</td>
    </tr>
  )
}

const Content = (props) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Course Number</th>
          <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Course Name</th>
          <th style={{ border: '1px solid #ccc', padding: '8px', textAlign: 'left' }}>Units</th>
        </tr>
      </thead>
      <tbody>
        <Part part={props.parts[0]} />
        <Part part={props.parts[1]} />
        <Part part={props.parts[2]} />
      </tbody>
    </table>
  )
}

const Total = (props) => {
  const sum = props.parts[0].units + props.parts[1].units + props.parts[2].units
  return <p><strong>Number of units - {sum}</strong></p>
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.fullName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340 - Industry Elective 1',
    parts: [
      { code: 'IT317', name: 'Project Management', units: 3 },
      { code: 'IT365', name: 'Data Analytics 1', units: 3 },
      { code: 'CSIT327', name: 'Information Management 2', units: 3 }
    ]
  }

  const myName = 'Eleonora Sayson'
  const myCourseCode = 'CSIT340'
  const mySection = 'G7'

  return (  
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer fullName={myName} courseCode={myCourseCode} section={mySection} />
    </div>
  )
}

export default App