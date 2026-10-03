const Header = (props) => {
  return <h1>{props.courseName}</h1>
}

const Part = (props) => {
  return (
    <p>{props.partName} - {props.unitCount} units</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partName={props.partOne} unitCount={props.unitOne} />
      <Part partName={props.partTwo} unitCount={props.unitTwo} />
      <Part partName={props.partThree} unitCount={props.unitThree} />
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