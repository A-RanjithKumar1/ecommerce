import Sidebar from "./sidebar";
import Imagespage from "./imagespage";
const Container = (props) => {
  return (
    <div class="container">
      <Sidebar />
      <Imagespage arr={props.arr} />
    </div>
  );
};

export default Container;
