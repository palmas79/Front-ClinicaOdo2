document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    const paciente = {
    nombre: formData.get('nombre'),
    apellido: formData.get('apellido'),
    dni: formData.get('dni'),
    fechaIngreso: formData.get('fechaIngreso'),
    domicilio: {
        calle: formData.get('calle'),
        numero: formData.get('numero'),
        localidad: formData.get('localidad'),
        provincia: formData.get('provincia')
    }
    };         
    
    fetch('http://localhost:8082/pacientes/registrar', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(paciente)
    })
    .then(response => {
    if (response.ok) {
        
        console.log('Paciente registrado exitosamente');
    } else {
        throw new Error('Error al registrar paciente');
    }
    })
    .catch(error => {
    console.error('Error:', error);
    });
    
});