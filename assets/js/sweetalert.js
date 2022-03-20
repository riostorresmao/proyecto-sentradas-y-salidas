Swal.fire(
    'Hola,de nuevo!',
    'Clic en elboton para iniciar!',
    'success'
  )

  swal({
    title: "Estas seguro?",
    text: "de registrar un equipo!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("cambio guardado", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });