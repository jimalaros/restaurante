const restaurantes = [];
const reservas = [];
const mesas = 15;

/**
 * * Se listan todos los restaurantes
 */
exports.listaRestaurantes = (_, res) => {
    try {
        // Se devuelven los restaurantes registrados
        res.json(restaurantes);
    } catch (err) { res.status(500).json(err); }
};

/**
 * * Se listan todos los restaurantes que estén en la ciudad pasada por query
 */
exports.filtroCiudad = (req, res) => {
    const ciudad = req.query;
    try {
        // Se filtran los restaurantes por ciudad
        const restaurantesEncontrados = restaurantes.filter(restaurante => restaurante.ciudad === ciudad.ciudad)
        // Se devuelven los restaurantes encontrados
        if (restaurantesEncontrados) {
            res.json(restaurantesEncontrados);
        }
        res.status(404).json({err: 'El restaurante no esta registrado.'});
    } catch (err) { res.status(500).json(err); }
};

/**
 * * Se listan todos los restaurantes que empiecen con la letra pasada por query
 */
exports.filtroLetra = (req, res) => {
    const letra = req.query;
    try {
        // Se filtran los restaurantes que empiecen con la letra
        const restaurantesEncontrados = restaurantes.filter(restaurante => restaurante.nombreRestaurante.charAt(0) === letra.letra)
        // Se devuelven los restaurantes encontrados
        if (restaurantesEncontrados) {
            res.json(restaurantesEncontrados);
        }
        res.status(404).json({err: `No hay restaurantes en la base de datos que empiecen por ${letra}`});
    } catch (err) { res.status(500).json(err); }
};

/**
 * * Se crean nuevos restaurantes
 * @param nombreRestaurante
 * @param descripcion
 * @param direccion
 * @param ciudad
 * @param urlImagen
 */
exports.nuevoRestaurante = (req, res) => {
    const id = restaurantes.length + 1
    const { nombreRestaurante, descripcion, direccion, ciudad, urlImagen } = req.body;
    
    try {
        // Se busca un restaurante en la base de datos con el nombre que viene en el body
        const restaurante = restaurantes.find(restaurante => restaurante.nombreRestaurante === nombreRestaurante);

        // Si hay información y el restaurante no existe, se procede a crear el nuevo restaurante
        if (nombreRestaurante && descripcion && direccion && ciudad && urlImagen) {
            // Se valida que el restaurante no se encuentre registrado
            if (!restaurante) {
                const restaurante = { id, ...req.body, mesas };
                restaurantes.push(restaurante);
                res.status(201).json({msg: 'El restaurante ha sido registrado con éxito'});
            }
            res.status(400).json({err: 'El restaurante ya esta registrado'});
        }
        // Se valida que haya información
        res.status(400).json({err: 'Toda la información es necesaria'});    
    } catch (err) { res.status(500).json(err); }
};

/**
 * * Se editan la información de alguno de los restaurantes existentes
 * @param nombreRestaurante
 * @param descripcion
 * @param direccion
 * @param ciudad
 * @param urlImagen
 */
exports.editar = (req, res) => {
    const id = req.params.id
    const { nombreRestaurante, descripcion, direccion, ciudad, urlImagen } = req.body;
    
    try {
        // Se busca el restaurante por su identificador
        const restaurante = restaurantes.filter(p => p.id == id)[0];

        if (restaurante) {
            // Se valida que hayan pasado toda la información
            if (nombreRestaurante && descripcion && direccion && ciudad && urlImagen) {
                // Se editan los campos del restaurante
                restaurante.nombreRestaurante = nombreRestaurante;
                restaurante.descripcion = descripcion;
                restaurante.direccion = direccion;
                restaurante.ciudad = ciudad;
                restaurante.urlImagen = urlImagen;
                res.status(200).json({msg: 'El restaurante fue editado con exito'});
            }
            res.status(400).json({err: 'Toda la información es necesaria'});
        } else {
            res.status(404).json({err: 'El restaurante no esta registrado.'});
        }    
    } catch (err) { res.status(500).json(err); }
};

/**
 * * Se eliminan alguno de los restaurantes existentes
 */
exports.eliminar = (req, res) => {
    const id = req.params.id;
    
    try {
        // Se busca el restaurante por su identificador    
        const restaurante = restaurantes.find(r => r.id == id);
        if (restaurante){
            // Se elimina el restaurante
            restaurantes.splice(restaurantes.lastIndexOf(restaurante),1);
            res.status(200).json({msg:'Restaurante eliminado'});
        }
        res.status(404).json({err: 'El restaurante no esta registrado'});   
    } catch (err) { res.status(500).json(err); }
};

/**
 * * Para hacer reservas
 * @param nombre
 */
exports.hacerReserva = (req, res) => {
    try {
        const { nombre } = req.body;
        const longitud = reservas.length;
        
        // Se valida que el restaurante exista
        const restaurante = restaurantes.find(restaurante => restaurante.nombreRestaurante === nombre);
        if (restaurante) {
            const reserva = { id: restaurante.id, nombre: restaurante.nombreRestaurante, ciudad: restaurante.ciudad, mesas: restaurante.mesas - 1 }
            // Solo se podrá hacer una reserva si hay 20 o menos
            if (longitud<=20) {
                reservas.push(reserva);
                res.status(201).json({msg: 'Reserva hecha con éxito'});
            }
            res.status(400).json({msg: 'Máximo de reservas alcanzadas'});
        }
        res.status(404).json({err: 'El restaurante no esta registrado'});
    } catch (err) { res.status(500).json(err); }    
};

/**
 * * Se listan todas las reservas
 */
exports.listaReservas = (_, res) => {
    try {
        // Se devuelven las reservas hechas
        res.json(reservas);
    } catch (err) { res.status(500).json(err); }
};