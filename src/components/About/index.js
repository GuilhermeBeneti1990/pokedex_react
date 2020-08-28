import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Slide from '@material-ui/core/Slide'
import Info from '@material-ui/icons/Info'
import './style.css'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Info className='infoButton' onClick={handleClickOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
              <h1>Como usar a Pokedex</h1>
              <span>Veja como é simples</span>
              <ul className='helpSteps'>
                  <li><b>Primeiro passo: </b>Digite no campo de busca o nome do pokemon que deseja buscar.</li>
                  <li><b>Segundo passo: </b>Clique na pokebola acima do campo de busca para realizar a busca.</li>
                  <li><b>Terceiro passo: </b>Visualize as informações disponíveis do pokemon desejado.</li>
                  <li><b>Passos Opcionais: </b>Insira o nome de outro pokemon no campo de busca e repita o segundo passo novamente, ou clique na logo 'Pokedex' na barra de navegação para limpar a busca.</li>
              </ul>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" className='helpButton'>
            Entendi
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}