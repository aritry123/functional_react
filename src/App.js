import './App.css'
// import ContactManager from './StateInFunctional/ContactManager'
import SimpleState from "./StateInFunctional/SimpleState"
import UsingStateObj from './StateInFunctional/UsingStateObj'
import WelcomePage from './StateInFunctional/WelcomePage'
import WithDestructing from './StateInFunctional/WithDestructing'
import data from "./StateInFunctional/ContactData"
import ContactManager from "./LCMInFunctional/ContactManager"
import {BrowserRouter,Route,Routes,Link, NavLink} from 'react-router-dom'
import Sort from "./ScoreDashBoard/Sort"
import CountComponent from "./HookComponents/CountComponent"
import ParentComponent from "./LCMInFunctional/ParentComponent"
import FetchAPI from "./LCMInFunctional/FetchAPI"
import HookComp from "./HookComponents/HookComponent"
import FormHook from "./HookComponents/FormHook"
import Response from "./ScoreDashBoard/Response"
import LeaderBoard from "./ScoreDashBoard/LeaderBoard"
import AuthProvider from "./AuthContext/AuthProvider"
import CounterProvider from "./Counter/CounterProvider"
import { ClassCounterProvider } from "./ClassCounter/ClassCounterProvider"
import { ThemeProvider } from "./ThemeChanger/ThemeProvider"
import ThemeProviderfn from "./ThemeChanger/ThemeProviderfn"
// import Navbar from "./RouterCM/Navbar"
import CM from "./RouterCM/CM"
import CounterConnector from "./Redux/ReactReduxSetup/CounterConnector"
import GetUserConnector from "./ReduxThunk/Component/GetUserConnector"
// import DashBoard from "./ReduxTookitConfigs/ToolkitComponents/DashBoard"
// import LoginComponent from "./ReduxTookitConfigs/ToolkitComponents/LoginComponent"
import ViewUsers from "./CRUDUsingToolkit/CRUDComponents/ViewUsers"
import AddUser from "./CRUDUsingToolkit/CRUDComponents/AddUser"
import UpdateUser from "./CRUDUsingToolkit/CRUDComponents/UpdateUser"
import Users from "./CRUDUsingToolkitLiveServer/CRUDComps/Users"
import AddUsers from "./CRUDUsingToolkitLiveServer/CRUDComps/AddUsers"
import UpdateUsers from "./CRUDUsingToolkitLiveServer/CRUDComps/UpdateUsers"
import SampleRefComponent from "./UsingRef/SampleRefComponent"
import ParentForm from "./UsingRef/ParentForm"
import FormsInput from "./FormElements/FormsInput"
import Navbar from "./AddToCart/Nav/Navbar"
// import Home from './AddToCart/Components/Home'
import Electronics from './AddToCart/Components/Electronics'
import Cloths from './AddToCart/Components/Cloths'
import Cart from './AddToCart/Components/Cart'
import SearchedItems from './AddToCart/Components/SearchedItems'
import FormComponentJoi from './JoiBrowserEg/FormComponent'
import Display from './FrontEnd/Display'
import DisplayTwo from './FrontEnd/DisplayTwo'
import LoginToken from './jwt tokens/LoginToken'
import DashBoardToken from './jwt tokens/DashBoard'
// import Login from './CRUDUsingMongoDB/Components/Login'
import DashBoard from './CRUDUsingMongoDB/Components/Dashboard'
import LoginCookies from './cookies and jwt/LoginCookies'
import DashBoardCookies from './cookies and jwt/DashboardCookies'
import LoginComponent from './cookies and jwt/LoginComponent'
import DashBoardComponent from './cookies and jwt/DashboardComponent'
// import Signup from './MiniProject/Components/Signup'
import Provider from './MiniProject/Provider'
import Login from './MiniProject/Components/Login'
import Admin from './MiniProject/Components/Admin'
import User from './MiniProject/Components/User'
import Signup from './MiniProject/Components/Signup'
import ForgotPassword from './MiniProject/Components/ForgotPassword'
import Home from './MiniProject/Components/Home'
import Course from './MiniProject/Components/Course'
import Fav from './MiniProject/Components/Fav'
// import Login from './RTK_jwt_Tokens/Components/Login'
// import DashBoard from './RTK_jwt_Tokens/Components/Dashboard'
function App() {
    return(
        <div>
            {/* <SimpleState></SimpleState> */}
            {/* <WithDestructing></WithDestructing> */}
            {/* <WelcomePage></WelcomePage> */}
            {/* <UsingStateObj></UsingStateObj> */}
            {/* <ContactManager data={data}></ContactManager> */}
            {/* <ContactManager></ContactManager> */}

            {/* <BrowserRouter> */}
                {/* <NavLink to='/name' style={({isActive})=>({color: isActive ? 'red' : 'blue'})}>Name</NavLink>
                <NavLink to='/age' style={({isActive})=>({color: isActive ? 'red' : 'blue'})}>Age</NavLink>
                <NavLink to='/rank' style={({isActive})=>({color: isActive ? 'red' : 'blue'})}>Rank</NavLink>
                <NavLink to='/score' style={({isActive})=>({color: isActive ? 'red' : 'blue'})}>Score</NavLink> */}
                {/* <NavLink to='/' style={({isActive})=>({color: isActive ? 'red' : 'blue'})}>Leaderboard</NavLink> */}
                {/* <Routes>
                    <Route path="/" element={<LeaderBoard></LeaderBoard>}></Route>
                    <Route path="/name" element={<Sort id={1}></Sort>}></Route>
                    <Route path="/age" element={<Sort id={2}></Sort>}></Route>
                    <Route path="/rank" element={<Sort id={3}></Sort>}></Route>
                    <Route path="/score" element={<Sort id={4}></Sort>}></Route>
                </Routes> */}
            {/* </BrowserRouter> */}

            {/* <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<CM id={0}></CM>}></Route>
                    <Route path="/addContact" element={<CM id={1}></CM>}></Route>
                    <Route path="/updateContact" element={<CM id={2}></CM>}></Route>
                    <Route path="/deleteContact" element={<CM id={3}></CM>}></Route>
                </Routes>
            </BrowserRouter> */}

            {/* <ParentComponent></ParentComponent> */}

            {/* <FetchAPI></FetchAPI> */}

            {/* <HookComp></HookComp> */}

            {/* <FormHook></FormHook> */}

            {/* <CountComponent></CountComponent> */}

            {/* <AuthProvider></AuthProvider> */}
            {/* <CounterProvider></CounterProvider> */}
            {/* <ClassCounterProvider></ClassCounterProvider> */}
            {/* <ThemeProvider></ThemeProvider> */}
            {/* <ThemeProviderfn></ThemeProviderfn> */}

            {/* <CounterConnector></CounterConnector> */}

            {/* <GetUserConnector></GetUserConnector> */}

            {/* <LoginComponent></LoginComponent>
            <DashBoard></DashBoard> */}

            {/* <ViewUsers></ViewUsers> */}

            {/* <BrowserRouter> */}
                {/* <Link to='/'>View Contacts</Link>
                <Link to='/add'>Add Contact</Link>
                <Link to='/update'>Update Contact</Link> */}
                {/* <NavLink to='/' style={({isActive})=>({color: isActive ? 'red' : 'blue'})}>View Contacts</NavLink><br/>
                <NavLink to='/add' style={({isActive})=>({color: isActive ? 'red' : 'blue'})}>Add Contact</NavLink><br/> */}
                {/* <NavLink to='/update' style={({isActive})=>({color: isActive ? 'red' : 'blue'})}>Update Contact</NavLink> */}
                {/* <Routes> */}
                    {/* <Route path='/' element={<ViewUsers></ViewUsers>}></Route>
                    <Route path='/add' element={<AddUser></AddUser>}></Route>
                    <Route path='/update' element={<UpdateUser></UpdateUser>}></Route> */}
                    {/* <Route path='/' element={<Users></Users>}></Route>
                    <Route path='/add' element={<AddUsers></AddUsers>}></Route>
                    <Route path='/update' element={<UpdateUsers></UpdateUsers>}></Route> */}
                {/* </Routes> */}
            {/* </BrowserRouter> */}

            {/* <SampleRefComponent></SampleRefComponent> */}
            {/* <ParentForm></ParentForm> */}

            {/* <FormsInput></FormsInput> */}

            {/* <BrowserRouter>
                <Navbar></Navbar>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/electronics' element={<Electronics></Electronics>}></Route>
                    <Route path='/cloths' element={<Cloths></Cloths>}></Route>
                    <Route path='/cart' element={<Cart></Cart>}></Route>
                    <Route path='/search' element={<SearchedItems></SearchedItems>}></Route>
                </Routes>
            </BrowserRouter> */}

            {/* <FormComponentJoi></FormComponentJoi> */}

            {/* <Display></Display> */}
            {/* <DisplayTwo></DisplayTwo> */}

            {/* <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginToken></LoginToken>}></Route>
                    <Route path='/dashboard' element={<DashBoardToken></DashBoardToken>}></Route>
                </Routes>
            </BrowserRouter> */}

            {/* <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login></Login>}></Route>
                    <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
                </Routes>
            </BrowserRouter> */}

            {/* <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login></Login>}></Route>
                    <Route path='/login' element={<Login></Login>}></Route>
                    <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
                </Routes>
            </BrowserRouter> */}

        {/* <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginCookies></LoginCookies>}></Route>
            <Route path='/dashboard' element={<DashBoardCookies></DashBoardCookies>}></Route>
        </Routes>
        </BrowserRouter> */}

        {/* <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginComponent></LoginComponent>}></Route>
            <Route path='/dashboard' element={<DashBoardComponent></DashBoardComponent>}></Route>
        </Routes>
        </BrowserRouter> */}

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login></Login>}></Route>
                <Route path='signup' element={<Signup></Signup>}></Route>
                <Route path='/forgot_password' element={<ForgotPassword></ForgotPassword>}></Route>
                <Route path='/admin_dashboard' element={<Admin></Admin>}></Route>
                <Route path='/user_dashboard' element={<User></User>}></Route>
                <Route path='/user_home' element={<Home></Home>}></Route>
                <Route path='/user_courses' element={<Course></Course>}></Route>
                <Route path='/favourite_list' element={<Fav></Fav>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
}
export default App