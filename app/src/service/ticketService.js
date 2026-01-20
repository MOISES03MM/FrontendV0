export const getTickets =async () => {
    try {
        const respuesta = await fetch("http://localhost:8080/api/tickets");
        if(!respuesta.ok) throw new Error('error al obtener los datos')
        const data = await respuesta.json()
        return data;
    } catch (e) {
        console.log('error al obtener tikets', e)
        throw error;
    }
}

export const crear =async (nuevoTiket) => {
    try {
        const respuesta = await fetch("http://localhost:8080/api/tickets", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(nuevoTiket)
        })

        if(!respuesta.ok) throw new Error('error al crear el tiket')
            return await respuesta.json()
    } catch (error) {
        console.log('error al crear el ticket', error)
        throw error;
    }
}

export const obtenerPorCodigo = async(id) => {
    try {
        const resultado = await fetch(`http://localhost:8080/api/tickets/${id}`)

        if(resultado.status===404){
            return null;
        }

        if(!resultado.ok) throw new Error('Error al obtener el tiket')
            return await resultado.json()
    } catch (error) {
        console.log('error al obtener el ticket con codigo', error)
        throw error;
    }
}