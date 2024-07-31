import {
    faq,
    navegacion,
    cardEvent,
    CardTestimonios,
    nosotrosHero,
    progrmasCard,
    servicioCard,
    servicioInput,
    TipoArchivo,
    imagenes,
    blogCard,
    historiaCard,
    equipoCard,
    somosCard
} from "./js/data";

// Definición del contexto para diferentes páginas utilizando Handlebars
const handlerBarsContext = {
    "/index.html": {
        title: "Enfermería - Unicah",
        logo: "/images/logoEn.jpg",
        faq: faq,
        navegacion: navegacion,
        cardEvent: cardEvent,
        CardTestimonios: CardTestimonios,
    },
    "/page/faq.html": {
        title: "Enfermería - Preguntas Frecuentes",
        logo: "/images/logoEn.jpg",
        faq: faq,
        navegacion: navegacion
    },
    "/page/nosotros.html": {
        title: "Enfermería - Nosotros",
        logo: "/images/logoEn.jpg",
        navegacion: navegacion,
        nosotrosHero: nosotrosHero
    },
    "/page/programas.html": {
        title: "Enfermería - Programas",
        logo: "/images/logoEn.jpg",
        navegacion: navegacion,
        progrmasCard: progrmasCard
    },
    "/page/servicios.html": {
        title: "Enfermería - Servicios",
        logo: "/images/logoEn.jpg",
        navegacion: navegacion,
        servicioCard: servicioCard,
        servicioInput: servicioInput
    },
    "/page/galeria.html": {
        title: "Enfermería - Galeria",
        logo: "/images/logoEn.jpg",
        navegacion: navegacion,
        TipoArchivo: TipoArchivo,
        imagenes: imagenes
    },
    "/page/blog.html": {
        title: "Enfermería - Blog",
        logo: "/images/logoEn.jpg",
        navegacion: navegacion,
        blogCard: blogCard
    },
    "/page/eventos.html": {
        title: "Enfermería - Eventos",
        logo: "/images/logoEn.jpg",
        navegacion: navegacion,
    },
    "/page/contactos.html": {
        title: "Enfermería - Contactos",
        logo: "/images/logoEn.jpg",
        navegacion: navegacion,
    },
    "/page/perfilcarrera.html": {
        "title": "Enfermería - Perfilcarrera",
        "logo": "/images/logoEn.jpg",
        "navegacion": navegacion,
        "Descripcion": [{
            titulo: "Introducción",
            parrafo: "La Escuela de Enfermería y el Área de Orientación de la Vicerrectoría de Orientación y Asuntos Estudiantiles (VOAE) ponen a la disposición de la comunidad universitaria y nacional, el presente Perfil de la Carrera de Enfermería. Este documento contiene información básica para las(los) interesadas(os), y se edita con fines de orientación en la misma. La Escuela de Enfermería tiene como propósito, la formación de Profesionales de Enfermería que responda a las necesidades de salud de la población en su contexto, congruente a las nuevas metodologías, avances científico-técnicos y a la situación cambiante del país, sistema de salud y grupos poblacionales. La(el) egresada(o) de la Carrera de Enfermería es un(a) profesional con capacidad humana y científico técnica que participa en la identificación, análisis de las necesidades de la población y en el fortalecimiento de sus potencialidades, como la prestación de servicios, a través del diálogo y la negociación permanente intra y extra sectorial, estimulando el dinamismo de la comunidad en los procesos de toma de decisiones para conservar la salud."
        }],
        "af": [
            {
                "titulo": "Atención integral: ",
                "descrip": "Cuidados directos en salud con equidad, eficiencia y eficacia al individuo, la familia y la comunidad, con enfoque participativo y epidemiológico."
            },
            {
                "titulo": "Administración: ",
                "descrip": "Planificar, coordinar, ejecutar, evaluar y liderar los diferentes procesos de trabajo, programas, proyectos y servicios de salud."
            },
            {
                "titulo": "Educación: ",
                "descrip": "Su proceso de monitoreo desarrolla programas de: Educación permanente de la actividad educativa a la población. Educación continua y permanente personal de enfermería y otros. Formación de recursos humanos."
            },
            {
                "titulo": "Investigación",
                "descrip": "Utilizada como herramienta de trabajo que le permite identificar necesidades y problemas en el área de trabajo, orientada a la transformación de los servicios."
            }
        ],
        "tt": [
            {
                "tarea": "Identificar necesidades y problemas en el área de salud tanto hospitalario como comunitario."
            },
            {
                "tarea": "Elaborar proyectos orientados a brindar educación en Salud en forma continua y permanente."
            },
            {
                "tarea": "Planificar, coordinar, ejecutar y evaluar los servicios de salud de la población."
            },
            {
                "tarea": "Participar en cursos, seminarios, talleres y eventos científicos."
            },
            {
                "tarea": "Realizar prácticas dirigidas, en instituciones afines al campo profesional."
            },
            {
                "tarea": "Analizar la situación de Salud de los diferentes servicios de atención en salud."
            },
            {
                "tarea": "Investigar sobre el proceso de atención de los diferentes campos de práctica."
            },
            {
                "tarea": "Presentar propuestas encaminadas a mejorar los servicios de salud."
            }
        ],
        "hc": [
            {
                "habil": "Capacidad para identificar la realidad nacional y la heterogeneidad de los diferentes grupos sociales."
            },
            {
                "habil": "Desarrollar un pensamiento crítico y reflexivo en la explicación biológica e histórica cultural."
            },
            {
                "habil": "Asumir un papel de solidaridad y compromiso consigo mismo y grupos humanos."
            },
            {
                "habil": "Crear sus propios modelos y soluciones a las diferentes situaciones que afronta."
            },
            {
                "habil": "Facilidad para manejar diversas herramientas gerenciales como herramientas de trabajo cotidiano."
            },
            {
                "habil": "Capacidad para la negociación permanente y de una forma sostenible a nivel multisectorial."
            },
            {
                "habil": "Facilidad para interrelacionarse con diferentes grupos sociales."
            },
            {
                "habil": "Liderar procesos de promoción, prevención y transformación de los servicios de salud."
            },
            {
                "habil": "Capacidad en el manejo del recurso humano y tecnológico."
            }
        ],
        "al": [
            {
                "lugar": "Instituciones Públicas."
            },
            {
                "lugar": "Instituciones Privadas."
            },
            {
                "lugar": "Instituciones Semi-Autónomas."
            },
            {
                "lugar": "Organizaciones de Desarrollo No Gubernamentales."
            },
            {
                "lugar": "Organizaciones Internacionales."
            },
            {
                "lugar": "Ejercicio Liberal de la Profesión."
            },
            {
                "lugar": "Jefatura de Departamento, de Servicio, Unidad Hospitalaria y Comunitaria."
            },
            {
                "lugar": "Jefatura de Enfermería en Región, Área y Sector."
            },
            {
                "lugar": "Coordinación de Programas Especiales."
            },
            {
                "lugar": "Coordinación y Docencia en Centros de Educación Media y Superior."
            },
            {
                "lugar": "Supervisión de Servicios, Programas y Proyectos."
            },
            {
                "lugar": "Coordinación de Programa de Salud en la Industria, Banca y el Comercio."
            },
            {
                "lugar": "Gerencia de Programas de Salud."
            },
            {
                "lugar": "Dirección de Centros Educativos de Enfermería."
            },
            {
                "lugar": "Docente en Centros Formadores de Recursos a nivel universitario y de Escuelas Auxiliares de Enfermería."
            },
            {
                "lugar": "Práctica Privada, Consultoría y Otros."
            },
            {
                "lugar": "Jefatura de Programas."
            }
        ],
        "ac": [
            {
                "titulo": "Duración de la Carrera: ",
                "descrip": "5 años. 4 años de desarrollo asignaturas y 1 año de Servicio Social en diferentes zonas del país."
            },
            {
                "descrip": "Los estudiantes realizan el servicio social con Salario - Beca."
            },
            {
                "titulo": "Grado académico: ",
                "descrip": "Licenciatura."
            },
            {
                "titulo": "Título a obtener: ",
                "descrip": "Licenciado(a) en Enfermería."
            },
            {
                "descrip": "Es una carrera que exige dedicación exclusiva en tiempo y de preferencia no tener otras ocupaciones."
            },
            {
                "titulo": "Requisitos de Graduación:",
                "descrip": "Haber cumplido el plan de estudio y presentar monografía al finalizar el Servicio Social."
            },
            {
                "titulo": "Posibilidades de Estudio a nivel de especialidades en: ",
                "descrip": "Atención Integral del Niño y el Adolescente, Salud Materno Perinatal, Salud Familiar, Quirófanos."
            }
        ]
    },
    "/page/historia.html": {
        title: "Enfermería - Historia",
        logo: "/images/logoEn.jpg",
        navegacion: navegacion,
        historiaCard: historiaCard
    },
    "/page/equipo.html": {
        title: "Enfermería - Equipo",
        logo: "/images/logoEn.jpg",
        navegacion: navegacion,
        equipoCard: equipoCard
    },
    "/page/somos.html": {
        title: "Enfermería - Somos",
        logo: "/images/logoEn.jpg",
        navegacion: navegacion,
        somosCard: somosCard
    },
    // Agregar más rutas y datos aquí si es necesario
}

const pageContext = (page) => {
    const context = { ...handlerBarsContext[page] };
    return context;
};
export default pageContext;
