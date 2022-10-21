const swaggerOptions = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "BSALE - OpenAPI 3.0",
            description: "",
            version: "1.0.0",
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
        tags: [
            {
                name: "Restaurantes",
                description: "Todas las operaciones sobre restaurantes",
            },
        ],
        paths: {
            "/restaurantes": {
                get: {
                    tags: ["Restaurantes"],
                    summary: "Para ver todos los restaurantes registrados",
                    responses: {
                        200: {
                            description: "Successful operation",
                        },
                        500: {
                            description: "Internal Server Error",
                        },
                    },
                },
                post: {
                    tags: ["Restaurantes"],
                    summary: "Para registrar un restaurante",
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/restaurante",
                                },
                            },
                        },
                        required: true,
                    },
                    responses: {
                        201: {
                            description: "Created",
                        },
                        400: {
                            description: "Bad Request",
                        },
                        500: {
                            description: "Internal Server Error",
                        },
                    },
                },
            },  
            "/restaurantes/ciudad": {
                get: {
                    tags: ["Restaurantes"],
                    summary: "Para ver todos los restaurantes que esten en una ciudad",
                    parameters: [
                        {
                            name: "ciudad",
                            in: "query",
                            description: "Ciudad donde se encuentra el restaurante",
                            required: true,
                            schema: {
                                type: "string",
                                example: "Pereira",
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: "Successful operation",
                        },
                        404: {
                            description: "Not Found",
                        },
                        500: {
                            description: "Internal Server Error",
                        },
                    },
                },
            },
            "/restaurantes/letra": {
                get: {
                    tags: ["Restaurantes"],
                    summary: "Para ver todos los restaurantes que comiencen por la letra escrita en la query",
                    parameters: [
                        {
                            name: "letra",
                            in: "query",
                            description: "Primera letra del o de los restaurantes",
                            required: true,
                            schema: {
                                type: "string",
                                example: "P",
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: "Successful operation",
                        },
                        404: {
                            description: "Not Found",
                        },
                        500: {
                            description: "Internal Server Error",
                        },
                    },
                },
            },
            "/restaurantes/editar/{id}": {
                put: {
                    tags: ["Restaurantes"],
                    summary: "Para editar la información de uno de los restaurantes registrados",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID del restaurante",
                            required: true,
                            schema: {
                                type: "integer",
                                example: 1,
                            },
                        },
                    ],
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/restaurante",
                                },
                            },
                        },
                        required: true,
                    },
                    responses: {
                        200: {
                            description: "Successful operation",
                        },
                        400: {
                            description: "Bad Request",
                        },
                        404: {
                            description: "Not Found",
                        },
                        500: {
                            description: "Internal Server Error",
                        },
                    },
                },
            },
            "/restaurantes/eliminar/{id}": {
                delete: {
                    tags: ["Restaurantes"],
                    summary: "Para eliminar uno de los restaurantes registrados",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID del restaurante",
                            required: true,
                            schema: {
                                type: "integer",
                                example: 1,
                            },
                        },
                    ],
                    responses: {
                        200: {
                            description: "Successful operation",
                        },
                        404: {
                            description: "Not Found",
                        },
                        500: {
                            description: "Internal Server Error",
                        },
                    },
                },
            },
            "/restaurantes/reservas": {
                get: {
                    tags: ["Restaurantes"],
                    summary: "Para ver todas las reservas hechas",
                    responses: {
                        200: {
                            description: "Successful operation",
                        },
                        500: {
                            description: "Internal Server Error",
                        },
                    },
                },
                post: {
                    tags: ["Restaurantes"],
                    summary: "Para hacer una reserva",
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    $ref: "#/components/schemas/reserva",
                                },
                            },
                        },
                        required: true,
                    },
                    responses: {
                        201: {
                            description: "Created",
                        },
                        400: {
                            description: "Bad Request",
                        },
                        500: {
                            description: "Internal Server Error",
                        },
                    },
                },
            },
        },
        components: {
            schemas: {
                restaurante: {
                    type: "object",
                    properties: {
                        nombreRestaurante: {
                            type: "string",
                            example: "Plutos",
                        },
                        descripcion: {
                            type: "string",
                            example: "Comida Rapida",
                        },
                        direccion: {
                            type: "string",
                            example: "Terminal",
                        },
                        ciudad: {
                            type: "string",
                            example:
                                "Pereira",
                        },
                        urlImagen: {
                            type: "string",
                            example:
                                ".jpg",
                        },
                    },
                },
                reserva: {
                    type: "object",
                    properties: {
                        nombre: {
                            type: "string",
                            example: "Plutos",
                        },
                    },
                },
            },
        },
    },
    apis: ["./routes/*.js"],
};

module.exports = swaggerOptions;