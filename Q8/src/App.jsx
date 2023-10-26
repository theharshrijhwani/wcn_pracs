function App() {
  const onClickHandle = () => {
    alert("Hello!");
  };
  return <button onClick={onClickHandle}>Greet the User</button>;
}

export default App;
