Swal.fire(
    'Hola,de nuevo!',
    'Clic en elboton para iniciar!',
    'success'
  )

  swal({
    title: "Estas seguro?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("el cambio guardado", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });