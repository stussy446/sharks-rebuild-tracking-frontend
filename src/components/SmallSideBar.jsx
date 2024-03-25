import Wrapper from '../assets/wrappers/SmallSidebar';
import { useDashboardContext } from '../pages/DashboardLayout';

const SmallSideBar = () => {
  const data = useDashboardContext();
  console.log(data);
  return <Wrapper>Small SideBar </Wrapper>;
};
export default SmallSideBar;
