const Header = (props) => {
  return <h1>{props.courseName}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.partOne} - {props.unitOne} units</p>
      <p>{props.partTwo} - {props.unitTwo} units</p>
      <p>{props.partThree} - {props.unitThree} units</p>
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
  const partOne = 'IT317 Project Management'
  const unitOne = 3
  const partTwo = 'IT365 Data Analytics 1'
  const unitTwo = 3
  const partThree = 'CSIT327 Information Management 2'
  const unitThree = 3

  const myName = 'Eleonora Sayson'
  const myCourseCode = 'CSIT340'
  const mySection = 'G7'

  return (  
    <div>
      <Header courseName={courseName} />
      <Content 
        partOne={partOne} unitOne={unitOne}
        partTwo={partTwo} unitTwo={unitTwo}
        partThree={partThree} unitThree={unitThree}
      />
      <Total totalUnits={unitOne + unitTwo + unitThree} />
      <Footer fullName={myName} courseCode={myCourseCode} section={mySection} />
    </div>
  )
}

export default App