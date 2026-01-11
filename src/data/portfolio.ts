import { Project, Education, ContactInfo } from '@/types';

export const projects: Project[] = [
    {
        id: 'raices-compartidas',
        title: 'Raíces Compartidas',
        subtitle: 'Vivienda colaborativa para la integración intergeneracional en República',
        subsubtitle: 'Trabajo seleccionado para exhibición Envejecer en Comunidad',
        year: 2025,
        location: 'Claudio Gay / Toesca, Barrio República, Santiago Centro, Chile',
        memoriaDescriptiva: `Raíces Compartidas es un proyecto de vivienda colaborativa ubicado en el barrio República de Santiago, diseñado para integrar adultos mayores y estudiantes universitarios en un modelo de convivencia intergeneracional. El proyecto surge como respuesta a la problemática de segregación etaria y el abandono de espacios verdes en la zona, que concentra más de 70,000 estudiantes universitarios pero solo un 9% de población mayor de 65 años.

La propuesta arquitectónica se desarrolla en un terreno cedido por la Municipalidad de Santiago a la Fundación Cohousing, estableciendo convenios con universidades del sector para financiar residencias estudiantiles. El edificio de 5 pisos libera el 50% del terreno para crear un pasaje peatonal que conecta las calles Toesca y Claudio Gay, transformándose en una plaza pública con jardines, huertas urbanas y espacios de encuentro comunitario.

La estrategia arquitectónica se basa en compartir espacios comunes como cocinas, comedores, lavandería, gimnasio, zonas de estudio y huertos verticales, fomentando el apoyo mutuo entre generaciones. La materialidad combina estructura de acero, fachadas de ladrillo con celosías y elementos verdes que generan atmósferas acogedoras. La administración está a cargo de la Municipalidad, mientras los residentes colaboran en el mantenimiento de áreas verdes, fortaleciendo el sentido de comunidad.`,
        programa: `80 viviendas totales:
• 12 unidades 1D1B de 38m²
• 60 unidades 1D1B de 17-19m²

Espacios Comunes por Piso:
• Piso 1: Plaza pública, Lavandería, Huertos
• Piso 1-2: Comedor compartido
• Piso 3: Cocina-Comedor, Zona de recreación
• Piso 3-5: Huertos Verticales
• Piso 4: Zona de estudio
• Piso 5: Gimnasio
• Piso 5+1: Terraza

Área pública: Pasaje peatonal, plazas, jardines y huertas comunitarias`,
        objetivo: '¿Cómo puede una estrategia de vivienda colectiva abordar la segregación intergeneracional y revitalizar los espacios urbanos del barrio República para fomentar la convivencia entre adultos mayores y jóvenes universitarios?',
        objetivosEspecificos: [
            'Integrar generaciones diversas en un modelo de cohousing que promueva el apoyo mutuo',
            'Revitalizar jardines y huertas abandonados del barrio República',
            'Crear espacios de encuentro comunitario que combatan la soledad y exclusión',
            'Proporcionar infraestructura accesible para adultos mayores',
            'Ofrecer espacios de calidad para estudiantes universitarios',
            'Regenerar el tejido urbano mediante la activación de espacios verdes públicos'
        ],
        palabrasClave: [
            'Vivienda colaborativa',
            'Cohousing',
            'Integración intergeneracional',
            'Revitalización urbana',
            'Espacios comunitarios',
            'Adultos mayores',
            'Residencia estudiantil',
            'Huertos urbanos',
            'Sostenibilidad social',
            'Barrio República'
        ],
        m2Terreno: '2,200 m²',
        m2Construidos: '860 m²',
        densidad: '363 viviendas por hectárea',
        numeroPisos: '5 + terraza',
        coverImage: '/Proyectos/raices-compartidas/Fotos/Vista plaza.png',
        gallery: [
            {
                name: 'Detalles',
                images: [
                    '/Proyectos/raices-compartidas/Detalles/1767760414480-587d7766-78e4-49c1-902d-88b7cff58ea6_1.png',
                    '/Proyectos/raices-compartidas/Detalles/Folleto_page-0001.jpg',
                    '/Proyectos/raices-compartidas/Detalles/L4 copia_page-0001.jpg'
                ]
            },
            {
                name: 'Fotos',
                images: [
                    '/Proyectos/raices-compartidas/Fotos/Vista plaza.png',
                    '/Proyectos/raices-compartidas/Fotos/Area común.png',
                    '/Proyectos/raices-compartidas/Fotos/3.png',
                    '/Proyectos/raices-compartidas/Fotos/dfgh.png',
                    '/Proyectos/raices-compartidas/Fotos/sdfg.png'
                ]
            },
            {
                name: 'Planimetría',
                images: [
                    '/Proyectos/raices-compartidas/Planimetria/L2 examen_page-0001.jpg',
                    '/Proyectos/raices-compartidas/Planimetria/L3 Examen copia_page-0001.jpg',
                    '/Proyectos/raices-compartidas/Planimetria/L5 Examen_page-0001.jpg'
                ]
            },
            {
                name: 'Maquetas',
                images: [
                    '/Proyectos/raices-compartidas/maquetas/1.jpg',
                    '/Proyectos/raices-compartidas/maquetas/2.jpg',
                    '/Proyectos/raices-compartidas/maquetas/3.jpg',
                    '/Proyectos/raices-compartidas/maquetas/4.jpg',
                    '/Proyectos/raices-compartidas/maquetas/5.jpg',
                    '/Proyectos/raices-compartidas/maquetas/6.jpg'
                ]
            }
        ],
        tags: ['Vivienda colaborativa', 'Cohousing', 'Intergeneracional'],
        description: 'Vivienda colaborativa intergeneracional en Barrio República',
        memoria: 'Proyecto de vivienda colaborativa que integra adultos mayores y estudiantes universitarios.',
        images: ['/Proyectos/raices-compartidas/Fotos/Vista plaza.png']
    },
    {
        id: 'paseo-literario',
        title: 'Paseo Literario',
        subtitle: 'Proyecto ganador — Concurso Fundación Yo Convivo',
        year: 2024,
        location: 'Calle República, Santiago, Chile',
        memoriaDescriptiva: 'El proyecto Paseo Literario República nace como una propuesta desarrollada para la Fundación Yo Convivo, en el marco de un concurso orientado a activar el espacio público a través de la lectura, el encuentro y la permanencia. La iniciativa fue seleccionada como proyecto ganador, reconociendo su capacidad de articular diseño, uso y contexto urbano.\n\nEl artefacto expositivo se emplaza en un punto estratégico de la Calle República, aprovechando el flujo natural de peatones y orientando el recorrido hacia el escenario principal del evento. Su diseño inclinado responde a una escala humana, facilitando una lectura cómoda desde distintos ángulos y promoviendo la detención, la observación y la participación activa de los usuarios.\n\nLa propuesta incorpora un banco de descanso que dialoga con el mobiliario urbano existente, reforzando el carácter colectivo del lugar y ampliando las posibilidades de uso del espacio público. El conjunto se concibe como un dispositivo flexible, capaz de integrarse al entorno y activar la calle sin imponer una presencia dominante.\n\nDe este modo, el Paseo Literario República se plantea como una intervención temporal que invita a leer, compartir y apropiarse del espacio público desde la literatura y el encuentro, fortaleciendo la relación entre arquitectura, ciudad y comunidad.',
        programa: `Artefacto urbano:
• Artefacto expositivo inclinado
• Superficie de lectura e información
• Banco de descanso integrado
• Articulación con mobiliario urbano existente
• Relación directa con el recorrido peatonal`,
        objetivo: 'Fomentar la apropiación del espacio público mediante una intervención urbana de pequeña escala que promueva la lectura, el encuentro y la participación, fortaleciendo el carácter colectivo y acogedor del Paseo Literario República',
        objetivosEspecificos: [
            'Activar el espacio público a través de la lectura y el encuentro',
            'Diseñar un artefacto expositivo a escala humana',
            'Promover la detención, observación y participación de usuarios',
            'Integrar mobiliario urbano que dialogue con el contexto existente',
            'Fortalecer la relación entre arquitectura, ciudad y comunidad',
            'Crear un dispositivo flexible capaz de integrarse al entorno'
        ],
        palabrasClave: [
            'Espacio público',
            'Artefacto urbano',
            'Lectura',
            'Participación',
            'Activación cultural',
            'Mobiliario urbano'
        ],
        m2Terreno: '-',
        m2Construidos: '-',
        numeroPisos: '-',
        coverImage: '/Proyectos/Paseo-literario/Fotos/Capa 1.png',
        gallery: [
            {
                name: 'Detalles',
                images: [
                    '/Proyectos/Paseo-literario/Detalle/1a1Detalle 1.webp',
                    '/Proyectos/Paseo-literario/Detalle/1a1Detalle 2.webp',
                    '/Proyectos/Paseo-literario/Detalle/4 (1).webp',
                    '/Proyectos/Paseo-literario/Detalle/4 (2).webp',
                    '/Proyectos/Paseo-literario/Detalle/4 (3).webp',
                    '/Proyectos/Paseo-literario/Detalle/4 (4).webp',
                    '/Proyectos/Paseo-literario/Detalle/4 (5).webp',
                    '/Proyectos/Paseo-literario/Detalle/4 (6).webp',
                    '/Proyectos/Paseo-literario/Detalle/4 (7).webp',
                    '/Proyectos/Paseo-literario/Detalle/4 (8).webp',
                    '/Proyectos/Paseo-literario/Detalle/4 (9).webp',
                    '/Proyectos/Paseo-literario/Detalle/4 (10).webp',
                    '/Proyectos/Paseo-literario/Detalle/4 (11).webp',
                    '/Proyectos/Paseo-literario/Detalle/4 (12).webp'
                ]
            },
            {
                name: 'Fotos',
                images: [
                    '/Proyectos/Paseo-literario/Fotos/Capa 1.png',
                    '/Proyectos/Paseo-literario/Fotos/Capa 2.png',
                    '/Proyectos/Paseo-literario/Fotos/Capa 3.png',
                    '/Proyectos/Paseo-literario/Fotos/Imagen de WhatsApp 2025-07-26 a las 10.41.26_c5483f7e.jpg',
                    '/Proyectos/Paseo-literario/Fotos/IMG_20241207_135123.jpg',
                    '/Proyectos/Paseo-literario/Fotos/Recurso 11.png',
                    '/Proyectos/Paseo-literario/Fotos/Recurso 12.png',
                    '/Proyectos/Paseo-literario/Fotos/Recurso 13.png',
                    '/Proyectos/Paseo-literario/Fotos/Recurso 14.png',
                    '/Proyectos/Paseo-literario/Fotos/Recurso16.jpg'
                ]
            },
            {
                name: 'Maquetas',
                images: [
                    '/Proyectos/Paseo-literario/Maqueta/IMG_20241025_151853.jpg',
                    '/Proyectos/Paseo-literario/Maqueta/IMG_20241025_154334.jpg',
                    '/Proyectos/Paseo-literario/Maqueta/IMG_20241025_154532.jpg',
                    '/Proyectos/Paseo-literario/Maqueta/Recurso 10.png',
                    '/Proyectos/Paseo-literario/Maqueta/Recurso 9.png'
                ]
            },
            {
                name: 'Planimetría',
                images: [
                    '/Proyectos/Paseo-literario/Planimetria/PLANTA ARQ ubicacion 1 250.webp',
                    '/Proyectos/Paseo-literario/Planimetria/PLANTA DE ARQ.webp',
                    '/Proyectos/Paseo-literario/Planimetria/PLANTA DE TRAZADO.webp',
                    '/Proyectos/Paseo-literario/Planimetria/Recurso 1@300x.webp',
                    '/Proyectos/Paseo-literario/Planimetria/Recurso 2@300x.webp',
                    '/Proyectos/Paseo-literario/Planimetria/Recurso 3@300x.webp'
                ]
            }
        ],
        tags: ['Mobiliario urbano', 'Espacio público', 'Cultura'],
        description: 'Artefacto expositivo para paseo literario urbano',
        memoria: 'Proyecto de mobiliario urbano cultural que integra lectura y espacio público.',
        images: ['/Proyectos/Paseo-literario/Fotos/Capa 1.png']
    },
    {
        id: 'atravieso-ecuestre',
        title: 'Atravieso Ecuestre y Ruta Paisajística',
        subtitle: 'Infraestructura ecuestre integrada al paisaje productivo del viñedo',
        year: 2024,
        location: 'Viñedo en Pirque, Región Metropolitana, Chile',
        memoriaDescriptiva: 'El proyecto se desarrolla en el viñedo Aras de Pirque, a partir de la observación directa del territorio y la experiencia del recorrido in situ, en el marco del Taller de Verano OPS_udp. El área de intervención corresponde a un sector históricamente vinculado a la equitación, hoy subutilizado, que presenta un alto potencial como punto de cruce y articulación dentro del paisaje productivo.\n\nLa propuesta consiste en un artefacto arquitectónico que configura un atraveso, capaz de unificar la actividad ecuestre mediante una estructura que cumple múltiples funciones: paso controlado, sector de ensillado y espacio de detención y descanso para los caballos. Su emplazamiento a orillas del canal refuerza la relación con los cursos de agua y con el paisaje agrícola, integrándose de manera respetuosa al entorno.\n\nLa intervención se entiende como parte de una red de recorridos desarrollada en el contexto académico del taller, articulando rutas de cabalgata y caminata, y estableciendo un punto de inicio y encuentro para visitantes. De este modo, el proyecto permite activar el recorrido del viñedo desde una escala cercana, promoviendo la observación del paisaje y la experiencia a pie.\n\nLa propuesta reconoce las variables existentes del lugar —topografía, cursos de agua, material vegetal y usos productivos— y las integra en una solución de escala acotada, donde el artefacto actúa como mediador entre la actividad ecuestre, el paisaje y el visitante, reforzando la lectura y uso del territorio.',
        programa: `Infraestructura ecuestre:
• Atravieso peatonal y ecuestre
• Área de ensillado de caballos
• Espacios de descanso para caballos
• Inicio de ruta para visitantes
• Relación directa con canal y paisaje agrícola`,
        objetivo: 'Reactivar un sector del viñedo mediante una intervención de baja escala que integre la actividad ecuestre al recorrido público, mejorando la experiencia del paisaje y fortaleciendo la relación entre infraestructura, naturaleza y uso recreativo, a través de soluciones basadas en la naturaleza',
        objetivosEspecificos: [
            'Integrar la actividad ecuestre al recorrido público del viñedo',
            'Mejorar la experiencia del paisaje mediante infraestructura ligera',
            'Fortalecer la relación entre infraestructura, naturaleza y uso recreativo',
            'Reactivar un sector históricamente vinculado a la equitación',
            'Articular rutas de cabalgata y caminata',
            'Promover la observación del paisaje desde una escala cercana'
        ],
        palabrasClave: [
            'Arquitectura del paisaje',
            'Equitación',
            'Recorrido',
            'Infraestructura ligera',
            'Soluciones basadas en la naturaleza',
            'Paisaje productivo'
        ],
        m2Terreno: '-',
        m2Construidos: '-',
        numeroPisos: '-',
        coverImage: '/Proyectos/Atravieso-Ecuestre/Fotos/portada.jpg',
        gallery: [
            {
                name: 'Fotos',
                images: [
                    '/Proyectos/Atravieso-Ecuestre/Fotos/20240104125456_IMG_1243.JPG',
                    '/Proyectos/Atravieso-Ecuestre/Fotos/20240104130742_IMG_1269.JPG',
                    '/Proyectos/Atravieso-Ecuestre/Fotos/img6.jpg',
                    '/Proyectos/Atravieso-Ecuestre/Fotos/img9.jpg',
                    '/Proyectos/Atravieso-Ecuestre/Fotos/img12.jpg',
                    '/Proyectos/Atravieso-Ecuestre/Fotos/img15.jpg',
                    '/Proyectos/Atravieso-Ecuestre/Fotos/img18.jpg',
                    '/Proyectos/Atravieso-Ecuestre/Fotos/img21.jpg',
                    '/Proyectos/Atravieso-Ecuestre/Fotos/img27.jpg',
                    '/Proyectos/Atravieso-Ecuestre/Fotos/img30.jpg'
                ]
            },
            {
                name: 'Planimetría',
                images: [
                    '/Proyectos/Atravieso-Ecuestre/Planimetria/planta taller de verano.webp',
                    '/Proyectos/Atravieso-Ecuestre/Planimetria/taller de verano cortes.webp'
                ]
            },
            {
                name: 'Maquetas',
                images: [
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/0a1.jpg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/0A1EB8AC-DDDF-40D1-B99A-74B8E92A166C.jpeg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/1 (1).jpeg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/1 (4).jpeg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/1 (5).jpeg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/1 (6).jpeg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/161BFC18-6229-46F2-B11B-BCC849425D28.jpeg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/A34C70A4-7371-4C36-8C84-3942B36D6DA7.jpeg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/B77D525D-0F25-4644-83D2-3089EAE0AF11.jpeg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/IMG_3531.jpg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/IMG_3604.jpg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/IMG_3613.jpg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/IMG_3618.jpg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/IMG_3860.jpeg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/IMG_3865.jpeg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/IMG_3866.jpeg',
                    '/Proyectos/Atravieso-Ecuestre/Maqueta/IMG_3867.jpeg'
                ]
            }
        ],
        tags: ['Terapia ecuestre', 'Paisajismo', 'Bienestar'],
        description: 'Proyecto de terapia ecuestre integrado con ruta paisajística',
        memoria: 'Integración de equinoterapia con diseño paisajístico para espacios de bienestar.',
        images: ['/Proyectos/Atravieso-Ecuestre/Fotos/portada.jpg']
    },
    {
        id: 'borde-vivo',
        title: 'Llico | Borde Vivo',
        subtitle: 'Estrategia territorial de mitigación de riesgos basada en soluciones basadas en la naturaleza',
        year: 2025,
        location: 'Llico, Región del Maule, Chile',
        memoriaDescriptiva: 'El proyecto se desarrolla en la localidad de Llico, territorio expuesto de manera recurrente a riesgos naturales como inundaciones, incendios y eventos de origen marino. A partir del análisis territorial a escala macro y de la observación del lugar, se reconocen dinámicas naturales y estrategias locales de adaptación, como la represa de arena construida por los propios habitantes.\n\nLa propuesta plantea una estrategia integral de mitigación basada en soluciones basadas en la naturaleza, estructurada a partir de un sistema de capas que operan de manera complementaria: arrecifes interiores con función de doble represa y espacio productivo, un borde vegetal de protección frente al avance del agua, parques inundables para la regulación de crecidas y sistemas de recolección de aguas lluvia orientados a la mitigación del fuego.\n\nEn conjunto, estas operaciones configuran un borde resiliente que reduce riesgos, fortalece la relación entre comunidad y paisaje y transforma una condición de vulnerabilidad en una oportunidad ecológica y productiva para Llico.',
        programa: `Infraestructura paisajística:
• Arrecifes interiores productivos
• Borde vegetal de protección costera
• Parques inundables
• Sistemas de recolección de aguas lluvia
• Infraestructura paisajística de mitigación de riesgos`,
        objetivo: 'Reducir la vulnerabilidad territorial de Llico frente a inundaciones e incendios mediante una estrategia paisajística integrada, que combine mitigación de riesgos, adaptación al territorio y fortalecimiento del vínculo entre comunidad y paisaje',
        objetivosEspecificos: [
            'Mitigar riesgos de inundaciones mediante arrecifes interiores y parques inundables',
            'Proteger el territorio frente a eventos de origen marino con borde vegetal',
            'Reducir riesgo de incendios mediante sistemas de recolección de aguas lluvia',
            'Fortalecer estrategias locales de adaptación existentes',
            'Transformar vulnerabilidad en oportunidad ecológica y productiva',
            'Crear un borde resiliente que articule comunidad y paisaje'
        ],
        palabrasClave: [
            'Arquitectura del paisaje',
            'Territorio',
            'Resiliencia',
            'Riesgo natural',
            'Cuenca',
            'Soluciones basadas en la naturaleza',
            'Infraestructura verde',
            'Escala macro'
        ],
        m2Terreno: 'Intervención de escala territorial',
        m2Construidos: '-',
        numeroPisos: '-',
        coverImage: '/Proyectos/Borde-vivo/portada.jpg',
        gallery: [
            {
                name: 'Fotos Intervención',
                images: [
                    '/Proyectos/Borde-vivo/Fotos%20Intervenci%C3%B3n/2%20(1).png',
                    '/Proyectos/Borde-vivo/Fotos%20Intervenci%C3%B3n/2%20(2).png',
                    '/Proyectos/Borde-vivo/Fotos%20Intervenci%C3%B3n/2%20(3).png',
                    '/Proyectos/Borde-vivo/Fotos%20Intervenci%C3%B3n/2%20(4).png'
                ]
            },
            {
                name: 'Fotos Pre-existencia',
                images: [
                    '/Proyectos/Borde-vivo/Fotos%20Pre-existencia/477331054_18019080422664204_5992.png',
                    '/Proyectos/Borde-vivo/Fotos%20Pre-existencia/479320037_18019080431664204_1138.png',
                    '/Proyectos/Borde-vivo/Fotos%20Pre-existencia/576104441_18073694408223628_2342.png',
                    '/Proyectos/Borde-vivo/Fotos%20Pre-existencia/580554380_18073694390223628_3241.png',
                    '/Proyectos/Borde-vivo/Fotos%20Pre-existencia/Alcalde-de-Vichuquen-llama-a-las.png',
                    '/Proyectos/Borde-vivo/Fotos%20Pre-existencia/F1-27.png',
                    '/Proyectos/Borde-vivo/Fotos%20Pre-existencia/WhatsApp-Image-2022-09-11-at-12.png'
                ]
            },
            {
                name: 'Planimetría',
                images: [
                    '/Proyectos/Borde-vivo/Planimetria/L1 .webp',
                    '/Proyectos/Borde-vivo/Planimetria/L2 .webp',
                    '/Proyectos/Borde-vivo/Planimetria/L3.webp'
                ]
            }
        ],
        tags: ['Resiliencia', 'Soluciones basadas en la naturaleza', 'Mitigación de riesgos'],
        description: 'Estrategia territorial de mitigación de riesgos en Llico',
        memoria: 'Proyecto de infraestructura verde para reducir vulnerabilidad frente a inundaciones e incendios.',
        images: ['/Proyectos/Borde-vivo/portada.jpg']
    },
    {
        id: 'galerias-holanda',
        title: 'Galerías Holanda',
        subtitle: 'Remodelación y activación de oportunidades espaciales',
        year: 2025,
        location: 'Avenida Providencia, Santiago, Chile',
        memoriaDescriptiva: `MEMORIA PRE-EXISTENCIA

Obra: Galerías Francisco de Aguirre y La Fuente. Ubicación: Avenida Providencia, Santiago. Arquitectos: Jorge Aguirre Silva, Álvaro Aguirre y Carlos A. Urzúa B. Año de Construcción: 1969 – 1975.

Las Galerías Francisco de Aguirre y La Fuente forman parte de un conjunto arquitectónico moderno organizado a partir de una placa base de dos pisos de galerías comerciales, diseñadas originalmente para articular pasarelas peatonales y fomentar el cruce a través de la manzana. Sobre esta placa se desarrollan volúmenes de altura diferenciada: en la Galería La Fuente, la placa sostiene cuatro niveles superiores destinados a administración y vivienda, mientras que en la Galería Francisco de Aguirre se incorporan un nivel administrativo y siete niveles residenciales. Aunque el programa original fue concebido como un conjunto de uso mixto, la condición actual ha derivado en un predominio del comercio y los servicios, desdibujando la potencia de la vida residencial original.

MEMORIA REMODELACIÓN

Se propone la remodelación y activación de oportunidades espaciales en las galerías comerciales existentes, transformando un lugar de paso en uno de permanencia sin limitar sus usos. El proyecto busca unificar ambas galerías para entregar, a una escala mayor, aquella interconexión que el conjunto original ya proponía. Esto se logra vaciando el centro de la manzana, operación que permite vincular fluidamente los espacios y revelar el interior del conjunto.

A partir de esta liberación, se crea una Plaza Elevada que reutiliza y reconvierte los techos de la preexistencia, generando un nuevo suelo urbano sobre la placa comercial. Este espacio actúa como una rótula social que no solo sirve como área de estar, sino que se conecta directamente con las viviendas preexistentes, otorgándoles un espacio comunitario inédito y un nuevo acceso que las libera de su dependencia exclusiva del primer piso.

Para aprovechar el espacio aéreo sin interrumpir el comercio, se levantan 6 pisos de oficinas sobre la estructura existente. Este nuevo volumen se articula desplazándose hacia adelante cada dos niveles, lo que permite generar terrazas habitables en altura. A su vez, este gesto de adelantarse escalonadamente hacia la línea de edificación dirige las líneas visuales del proyecto hacia el interior, creando una marcada sensación de "entrar" que invita al usuario a recorrer y permanecer en el edificio.`,
        programa: `Uso mixto:
• Comercio (placa base existente)
• Oficinas (6 pisos nuevos)
• Vivienda (preexistente)
• Espacio Público (Plaza Elevada)
• Terrazas habitables en altura`,
        objetivo: 'Transformar un lugar de paso en uno de permanencia, unificando las galerías comerciales preexistentes mediante la liberación del centro de la manzana y la inserción de un nuevo volumen programático que reactiva el uso mixto sin interrumpir la actividad comercial',
        objetivosEspecificos: [
            'Unificar ambas galerías mediante vaciado del centro de manzana',
            'Crear Plaza Elevada reutilizando techos de preexistencia',
            'Conectar viviendas preexistentes con nuevo espacio comunitario',
            'Densificar mediante 6 pisos de oficinas sin interrumpir comercio',
            'Generar terrazas habitables con volumen escalonado',
            'Dirigir visuales hacia el interior para invitar a recorrer'
        ],
        palabrasClave: [
            'Reactivación Patrimonial',
            'Estructura Mixta',
            'Uso Mixto',
            'Estratificación',
            'Espacio Público',
            'Densificación aérea'
        ],
        m2Terreno: '5,300 m² totales',
        m2Construidos: '2,629 m² preexistencia + 2,671 m² ampliación',
        numeroPisos: 'Placa base 2 pisos + 6 pisos oficinas nuevos',
        coverImage: '/Proyectos/Galerias-Holanda/portada.jpg',
        gallery: [
            {
                name: 'Fotos',
                images: [
                    '/Proyectos/Galerias-Holanda/Fotos/1.png',
                    '/Proyectos/Galerias-Holanda/Fotos/Gemini_Generated_Image_xe5qe9xe5qe9xe5q.png',
                    '/Proyectos/Galerias-Holanda/Fotos/Gemini_Generated_Image_xe5qe9xe5qe9xe5qe (1).png',
                    '/Proyectos/Galerias-Holanda/Fotos/wmremove-transformed.png',
                    '/Proyectos/Galerias-Holanda/Fotos/wmremove-transformed (1).png',
                    '/Proyectos/Galerias-Holanda/Fotos/z.png',
                    '/Proyectos/Galerias-Holanda/Fotos/z1.png'
                ]
            },
            {
                name: 'Planimetría',
                images: [
                    '/Proyectos/Galerias-Holanda/Planimetria/1.png',
                    '/Proyectos/Galerias-Holanda/Planimetria/2.webp',
                    '/Proyectos/Galerias-Holanda/Planimetria/planta 1.png',
                    '/Proyectos/Galerias-Holanda/Planimetria/Recurso 4.png',
                    '/Proyectos/Galerias-Holanda/Planimetria/Recurso 5.png',
                    '/Proyectos/Galerias-Holanda/Planimetria/Recurso 7.png',
                    '/Proyectos/Galerias-Holanda/Planimetria/Recurso 8.png',
                    '/Proyectos/Galerias-Holanda/Planimetria/Recurso 8.webp',
                    '/Proyectos/Galerias-Holanda/Planimetria/Recurso 9.webp'
                ]
            },
            {
                name: 'Maquetas',
                images: [
                    '/Proyectos/Galerias-Holanda/Maqueta/20251218_141920.jpg',
                    '/Proyectos/Galerias-Holanda/Maqueta/20251218_142007.jpg',
                    '/Proyectos/Galerias-Holanda/Maqueta/20251218_142014.jpg',
                    '/Proyectos/Galerias-Holanda/Maqueta/20251218_142055.jpg',
                    '/Proyectos/Galerias-Holanda/Maqueta/20251218_142118.jpg',
                    '/Proyectos/Galerias-Holanda/Maqueta/20251218_142138.jpg',
                    '/Proyectos/Galerias-Holanda/Maqueta/20251218_142216.jpg',
                    '/Proyectos/Galerias-Holanda/Maqueta/20251218_142227.jpg',
                    '/Proyectos/Galerias-Holanda/Maqueta/20251218_142258.jpg',
                    '/Proyectos/Galerias-Holanda/Maqueta/20251218_142359.jpg',
                    '/Proyectos/Galerias-Holanda/Maqueta/20251218_142410.jpg',
                    '/Proyectos/Galerias-Holanda/Maqueta/20251218_142416.jpg',
                    '/Proyectos/Galerias-Holanda/Maqueta/20251218_142424.jpg',
                    '/Proyectos/Galerias-Holanda/Maqueta/20251218_142532.jpg'
                ]
            },
            {
                name: 'Análisis Pre-existencia',
                images: [
                    '/Proyectos/Galerias-Holanda/Analisis%20pre-existencia/Recurso%201.webp',
                    '/Proyectos/Galerias-Holanda/Analisis%20pre-existencia/Recurso%203.webp',
                    '/Proyectos/Galerias-Holanda/Analisis%20pre-existencia/Recurso%204.webp',
                    '/Proyectos/Galerias-Holanda/Analisis%20pre-existencia/Recurso%205.webp',
                    '/Proyectos/Galerias-Holanda/Analisis%20pre-existencia/Recurso%206.webp',
                    '/Proyectos/Galerias-Holanda/Analisis%20pre-existencia/Recurso%207.webp'
                ]
            },
            {
                name: 'Fotos Pre-existencia',
                images: [
                    '/Proyectos/Galerias-Holanda/1Fotos%20Pre-existencia/20250821_174535.jpg',
                    '/Proyectos/Galerias-Holanda/1Fotos%20Pre-existencia/20250909_181514.jpg',
                    '/Proyectos/Galerias-Holanda/1Fotos%20Pre-existencia/20250909_181540.jpg',
                    '/Proyectos/Galerias-Holanda/1Fotos%20Pre-existencia/20250909_181600.jpg',
                    '/Proyectos/Galerias-Holanda/1Fotos%20Pre-existencia/20250909_193436.jpg',
                    '/Proyectos/Galerias-Holanda/1Fotos%20Pre-existencia/20250909_193438.jpg',
                    '/Proyectos/Galerias-Holanda/1Fotos%20Pre-existencia/20250909_193749(0).jpg',
                    '/Proyectos/Galerias-Holanda/1Fotos%20Pre-existencia/IMG-20251004-WA0014.jpg'
                ]
            },
            {
                name: 'Maquetas Pre-existencia',
                images: [
                    '/Proyectos/Galerias-Holanda/1Maqueta%20Pre-existencia/20250926_180117.jpg',
                    '/Proyectos/Galerias-Holanda/1Maqueta%20Pre-existencia/20250926_181005.jpg',
                    '/Proyectos/Galerias-Holanda/1Maqueta%20Pre-existencia/20250926_181037(0).jpg',
                    '/Proyectos/Galerias-Holanda/1Maqueta%20Pre-existencia/20250926_181041.jpg',
                    '/Proyectos/Galerias-Holanda/1Maqueta%20Pre-existencia/20250926_181054.jpg',
                    '/Proyectos/Galerias-Holanda/1Maqueta%20Pre-existencia/20250926_181057.jpg',
                    '/Proyectos/Galerias-Holanda/1Maqueta%20Pre-existencia/20250926_181115.jpg',
                    '/Proyectos/Galerias-Holanda/1Maqueta%20Pre-existencia/20250926_181140.jpg',
                    '/Proyectos/Galerias-Holanda/1Maqueta%20Pre-existencia/20250926_181158.jpg',
                    '/Proyectos/Galerias-Holanda/1Maqueta%20Pre-existencia/20250926_181215.jpg',
                    '/Proyectos/Galerias-Holanda/1Maqueta%20Pre-existencia/20250926_181219.jpg'
                ]
            }
        ],
        tags: ['Reactivación Patrimonial', 'Uso Mixto', 'Densificación'],
        description: 'Remodelación de galerías históricas en Providencia con plaza elevada',
        memoria: 'Proyecto de densificación y reactivación de galerías comerciales mediante plaza elevada y nuevo volumen de oficinas.',
        images: ['/Proyectos/Galerias-Holanda/portada.jpg']
    },
    {
        id: 'torre-cultural',
        title: 'Torre Cultural | Ex-Fábrica Unilever',
        subtitle: 'Regeneración de patrimonio industrial',
        subsubtitle: 'Proyecto seleccionado para Expo-taller',
        year: 2024,
        location: 'Comuna de Quinta Normal, Santiago, Chile',
        memoriaDescriptiva: `Se propone el reacondicionamiento integral del complejo de la ex-fábrica Unilever, regenerando su entorno post-industrial para posicionarlo como el centro de interacción principal del futuro plan maestro "Ciudades Justas" del Minvu, en la comuna de Quinta Normal. El proyecto reconoce su posición estratégica y centralidad dentro de este nuevo tejido urbano, transformando la antigua infraestructura productiva en un catalizador social.

La intervención se articula verticalmente, aprovechando la volumetría de la antigua torre industrial para albergar nuevos programas culturales y comunitarios. El edificio se reconvierte en una "máquina social" que integra un centro social, talleres de arte y un teatro, consolidándose no solo como un equipamiento funcional, sino como el ícono arquitectónico y lugar de reunión neurálgico para las futuras viviendas del sector.`,
        programa: `Centro Social, Teatro / Auditorio, Talleres de Arte, Espacio Público`,
        objetivo: 'Regenerar una preexistencia industrial para convertirla en el núcleo articulador y simbólico del nuevo plan habitacional estatal, dotando al barrio de infraestructura cultural y un hito de identidad comunitaria',
        objetivosEspecificos: [
            'Reacondicionar integralmente el complejo de la ex-fábrica Unilever',
            'Posicionar el proyecto como centro de interacción del plan maestro Ciudades Justas',
            'Transformar infraestructura productiva en catalizador social',
            'Integrar programas culturales y comunitarios en la torre industrial',
            'Consolidar un ícono arquitectónico para el nuevo barrio'
        ],
        palabrasClave: [
            'Patrimonio Industrial',
            'Regeneración Urbana',
            'Equipamiento Cultural',
            'Plan Maestro',
            'Ciudades Justas'
        ],
        coverImage: '/Proyectos/Torre-Cultural/Planimetria/Capa 2.png',
        gallery: [
            {
                name: 'Fotos',
                images: [
                    '/Proyectos/Torre-Cultural/Fotos/Capa 1.png',
                    '/Proyectos/Torre-Cultural/Fotos/Capa 1 copia.png',
                    '/Proyectos/Torre-Cultural/Fotos/Capa 1 copia 2.png',
                    '/Proyectos/Torre-Cultural/Fotos/Capa 1 copia 3.png',
                    '/Proyectos/Torre-Cultural/Fotos/Capa 1 copia 4.png'
                ]
            },
            {
                name: 'Planimetría',
                images: [
                    '/Proyectos/Torre-Cultural/Planimetria/1aaCapa 1.png',
                    '/Proyectos/Torre-Cultural/Planimetria/1aaMorfologia.png',
                    '/Proyectos/Torre-Cultural/Planimetria/1aConcepto.png',
                    '/Proyectos/Torre-Cultural/Planimetria/1aPrograma.png',
                    '/Proyectos/Torre-Cultural/Planimetria/Capa 2.png',
                    '/Proyectos/Torre-Cultural/Planimetria/Corte 1.png',
                    '/Proyectos/Torre-Cultural/Planimetria/Corte 2.png',
                    '/Proyectos/Torre-Cultural/Planimetria/isometrica.png',
                    '/Proyectos/Torre-Cultural/Planimetria/Planta.png',
                    '/Proyectos/Torre-Cultural/Planimetria/PLantas.png'
                ]
            }
        ],
        tags: ['Patrimonio Industrial', 'Regeneración Urbana', 'Equipamiento Cultural'],
        description: 'Regeneración de ex-fábrica Unilever como centro cultural para plan Ciudades Justas',
        memoria: 'Reacondicionamiento de patrimonio industrial como núcleo articulador del plan habitacional estatal.',
        images: ['/Proyectos/Torre-Cultural/Planimetria/Capa 2.png']
    }
];

export const education: Education[] = [
    {
        id: 'udp',
        institution: 'Universidad Diego Portales',
        degree: 'Licenciado en Arquitectura',
        period: '2022 – Actual',
        description: 'Formación integral en arquitectura con énfasis en diseño urbano y arquitectura del paisaje',
    },
    {
        id: 'practica-biodiversidad',
        institution: 'Universidad Diego Portales',
        degree: 'Práctica Electiva - Biodiversidad Urbana y Planificación de Ciudades',
        period: 'Agosto – Diciembre 2025',
        description: 'Revisión y análisis de instrumentos territoriales y normativas bioclimáticas internacionales. Investigación de criterios para la protección de la biodiversidad y bienestar humano en la ciudad. Generación de fichas técnicas y metodologías de análisis para planificación territorial.',
    },
    {
        id: 'colegio',
        institution: 'Colegio Juan Luis Undurraga Aninat',
        degree: 'Técnico de Nivel Medio en Electrónica',
        period: '2018 – 2021',
        description: 'Enseñanza Media Técnico Profesional',
    },
];

export const contactInfo: ContactInfo = {
    phone: '+56 9 2030 7035',
    email: 'contacto@arquitectura.cl',
    location: 'Quilicura, Santiago, Chile',
};

export const profileText = `Estudiante y Licenciado en Arquitectura por la Universidad Diego Portales, con interés en la arquitectura del paisaje y el diseño urbano, abordando tanto la escala macro como micro. Mi enfoque considera el análisis territorial y urbano —incluyendo niveles de cuenca y estrategias de prevención de desastres naturales— integrando soluciones basadas en la naturaleza, junto con intervenciones a escala humana orientadas a mejorar la calidad de vida de manera cercana e inmediata.

Cuento con experiencia en proyectos académicos y concursos, manejo de herramientas digitales de diseño y representación, y alta motivación por aprender e integrarme a equipos de trabajo interdisciplinarios.`;
