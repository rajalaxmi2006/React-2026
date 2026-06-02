import Section1 from "./component/Section1/Section1";
import Section2 from "./component/Section2/Section2";
import users from "./data.js";

const App = () => {
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;