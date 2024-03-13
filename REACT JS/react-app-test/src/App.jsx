import Student from "./Student.jsx"

function App() {
  return(
    <>
      <Student name="James" age={25} isStudent={true}></Student>
      <Student name="Mary" age={55} isStudent={false}></Student>
    </>
  );
}

export default App