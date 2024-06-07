import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";
import {useState} from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };
  

  return (
    <main>
      <StarRating/>
      <Dialog isOpen={isOpen} openDialogFunc={openDialog} closeDialogFunc={closeDialog}/>
    </main>
  );
}

export default App;
