
import SweetAlert from 'react-native-sweet-alert';




    const showAlert = (tittle,subTittle,style) => {
        SweetAlert.showAlertWithOptions({
          title: tittle,
          subTitle: subTittle,
          confirmButtonTitle: 'OK',
          confirmButtonColor: '#000',
          otherButtonTitle: 'Cancel',
          otherButtonColor: '#dedede',
          style: style, // or 'error', 'warning', 'info'
          cancellable: true,
        },
        (isConfirm) => {
          // handle confirmation or cancellation
          console.log(isConfirm);
        });
      };
  


export default showAlert

