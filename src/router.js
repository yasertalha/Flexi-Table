import Home from "./container/Home/index";
import Navbar from "./component/Navbar";
import AutocompleteDropdown from "./component/autocomplete";

function Router(props) {
  return (
    <>
      <Navbar {...props} />
      <Home />
      <AutocompleteDropdown />
    </>
  );
}

export default Router;
