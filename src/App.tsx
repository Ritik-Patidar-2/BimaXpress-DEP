import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Plan from './components/plan/Plan';
import Layout from './components/layout/Layout';
import Hospital from './components/hospital/Hospital';
import Analyst from './components/analyst/Analysts';
import AnalystCreate from './components/analyst/analystCreate/AnalystCreate';
import AnalystUpdate from './components/analyst/analystUpdateContainer/AnalystUpdateContainer';
import Doctor from './components/doctor/Doctor';
import DoctorCreate from './components/doctor/doctorCreate/DoctorCreate';
import DoctorUpdate from './components/doctor/doctorUpdateContainer/DoctorUpdateContainer';
import NewCase from './components/newCase/NewCase';
import Order from './components/order/Order';
import Drafts from './components/drafts/Drafts';
import EmpanelledCompanies from './components/empanelled/EmpanelledCompanies';
import CreateCompany from './components/empanelled/createCompany/CreateCompany';
import UpdateCompanies from './components/empanelled/updateCompanies/UpdateCompanies';
import Mail from './components/mail/Mail';
import LoginPage from './components/auth/login.page';
// import SignPage from "./components/auth/signup.page";
import { useAppSelector } from './redux/hooks';
import PreauthForm from './components/preauthForm/PreauthForm';
import DepHome from './components/dep/depHome';
import DepLayout from './components/layout/DepLayout';
import { useEffect } from 'react';
import axiosConfig from './config/axiosConfig';
import DepDrafts from './components/drafts/DepDrafts';

function App() {
  
  const { user } = useAppSelector((state) => state?.user);

  const Wrapper = (element: any) => <Layout>{element}</Layout>;

  const DepWrapper = (element: any) => <DepLayout>{element}</DepLayout>;
  
  
  console.log(user);
  
  return (
    

    <Router>
      <Routes>
        
        {user ? (

            <>
            <Route path='/preauthform' element={<PreauthForm />} />
            <Route path='/' element={DepWrapper(<DepHome />)} />
            <Route path='/plan' element={Wrapper(<Plan />)} />
            <Route path='/hospital' element={Wrapper(<Hospital />)} />
            <Route path='/analyst' element={Wrapper(<Analyst />)} />
            <Route path='/analyst/:key' element={Wrapper(<AnalystUpdate />)} />
            <Route
              path='/analyst/create'
              element={Wrapper(<AnalystCreate />)}
            />
            <Route path='/doctor' element={Wrapper(<Doctor />)} />
            <Route path='/doctor/create' element={Wrapper(<DoctorCreate />)} />
            <Route path='/doctor/:key' element={Wrapper(<DoctorUpdate />)} />
            <Route path='/newCase' element={Wrapper(<NewCase />)} />
            <Route path='/newCase/:case' element={Wrapper(<NewCase />)} />

            {/* <Route path='/' element={Wrapper(<DepHome />)} /> */}
            <Route path='/order' element={Wrapper(<Order />)} />
            {/* <Route path='/caseData/:case' element={Wrapper(<Drafts />)} /> */}
            <Route path='/:case' element={DepWrapper(<DepDrafts />)} />

            <Route path='/mail' element={Wrapper(<Mail />)} />
            <Route
              path='/empanelledCompanies'
              element={Wrapper(<EmpanelledCompanies />)}
            />
            <Route
              path='/empanelledCompanies/create'
              element={Wrapper(<CreateCompany />)}
            />
            <Route
              path='/empanelledCompanies/:key'
              element={Wrapper(<UpdateCompanies />)}
            />
            </>

          ):(
          <>
            <Route path='/preauthform' element={<PreauthForm />} />
            {/* <Route path='/' element={DepWrapper(<DepHome />)} /> */}
            <Route path='/' element={<LoginPage />} />
            <Route path='/login' element={<LoginPage />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
