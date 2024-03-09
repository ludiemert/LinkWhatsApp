import LinkWhatsApp from './components/LinkWhatsApp';
import FormWhatsApp from './components/FormWhatsApp';

const Home = () => {

  return (

    <main >
      <div className="bg-slate-700 flex min-h-screen flex-col items-center justify-between px-5  py-2">
      
       <FormWhatsApp />
       <LinkWhatsApp />
     
      </div>     
    </main >
  );
};

export default Home;
