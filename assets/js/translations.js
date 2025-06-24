/**
 * Sistema de traducciones para el III Coloquio Internacional
 * Estructura de datos para ES/EN
 */

const translations = {
  es: {
    // Navegación
    nav: {
      home: "Inicio",
      about: "Acerca",
      program: "Programa",
      speakers: "Ponentes",
      gallery: "Galería",
      registration: "Registro",
      sponsors: "Aliados",
      contact: "Contacto"
    },
    
    // Hero Section
    hero: {
      date: "Noviembre 2025 - Hermosillo, Sonora y Tucson, Arizona",
      title: "III Coloquio Internacional de Espacio y Sostenibilidad",
      description: "Aplicaciones de la ciencia y tecnología espacial para el monitoreo y gestión de recursos hídricos en la región fronteriza México-Estados Unidos.",
      registerBtn: "Registro"
    },
    
    // About Section
    about: {
      title: "Acerca del Coloquio",
      description: "El III Coloquio Internacional de Espacio y Sostenibilidad es un evento binacional que reúne a expertos, académicos y profesionales del sector espacial y ambiental para abordar los desafíos de la gestión sustentable de recursos hídricos en la zona fronteriza entre México y Estados Unidos, utilizando tecnologías espaciales como herramientas clave para el monitoreo y la toma de decisiones.",
      benefits: {
        networking: "Sesiones de Networking",
        contacts: "Nuevos Contactos Profesionales", 
        speakers: "Inspiración de Ponentes Destacados",
        binational: "Eventos Binacionales (México-EUA)",
        sustainability: "Enfoque en Sostenibilidad y Tecnología Espacial"
      },
      moreInfoBtn: "Más Información"
    },
    
    // Information Bar
    info: {
      location: {
        title: "Ubicación",
        text: "Hermosillo, Sonora y Tucson, Arizona"
      },
      date: {
        title: "Fecha y Hora",
        text: "9am - 6pm, Noviembre 2025"
      },
      speakers: {
        title: "Ponentes",
        text: "25 Profesionales"
      },
      capacity: {
        title: "Cupo",
        text: "150 Personas"
      }
    },
    
    // Intro Section
    intro: {
      title: "¿Por Qué Participar?",
      description: "El III Coloquio Internacional de Espacio y Sostenibilidad ofrece una oportunidad única <br> para conectar con expertos y abordar desafíos ambientales transfronterizos.",
      features: {
        speakers: {
          title: "Ponentes Destacados",
          description: "Expertos internacionales en tecnología espacial y gestión de recursos hídricos compartirán sus conocimientos."
        },
        networking: {
          title: "Networking Profesional",
          description: "Conecta con profesionales del sector espacial y ambiental de México y Estados Unidos."
        },
        innovation: {
          title: "Innovación Tecnológica",
          description: "Conoce las últimas aplicaciones de tecnología satelital para sostenibilidad."
        },
        inspiration: {
          title: "Inspírate",
          description: "Descubre aplicaciones innovadoras de datos satelitales para la gestión sostenible del agua."
        },
        networking2: {
          title: "Sesiones de Networking",
          description: "Oportunidades para conectar con académicos, empresas y organizaciones del sector espacial y ambiental."
        },
        visits: {
          title: "Visitas Técnicas", 
          description: "Recorridos a instalaciones clave para la gestión del agua en la región fronteriza Sonora-Arizona."
        }
      }
    },
    
    // Program Session Types
    sessionTypes: {
      conference: "Conferencia",
      workshop: "Taller",
      panel: "Panel"
    },
    
    // Program Tabs
    programTabs: {
      phase1: {
        title: "Fase I: Sonora",
        date: "12 noviembre 2025"
      },
      phase2: {
        title: "Fase II: Arizona", 
        date: "14 noviembre 2025"
      },
      phase3: {
        title: "Reserva de Fechas",
        date: "2025-2026"
      },
      resources: {
        title: "Recursos y Enlaces",
        subtitle: "Recursos Hídricos NASA"
      }
    },

    // Program Section
    program: {
      title: "Programa del Coloquio",
      description: "Agenda detallada del III Coloquio Internacional de Espacio y Sostenibilidad.",
      events: {
        opening: {
          title: "Ceremonia de Apertura",
          speaker: "Dra. María González",
          description: "Bienvenida oficial al III Coloquio Internacional de Espacio y Sostenibilidad con la participación de autoridades de México y Estados Unidos.",
          location: "Ubicación:",
          venue: "Auditorio Principal, Tec de Monterrey Campus Hermosillo"
        },
        session1: {
          title: "Tecnologías Satelitales para Monitoreo Hídrico",
          speaker: "Dr. Roberto Sánchez",
          description: "Análisis de tecnologías satelitales aplicadas al monitoreo de recursos hídricos en la región fronteriza México-Estados Unidos.",
          location: "Ubicación:",
          venue: "Sala de Conferencias A, Tec de Monterrey Campus Hermosillo"
        },
        workshop1: {
          title: "Taller: Procesamiento de Datos Satelitales",
          speaker: "Ing. Patricia López",
          description: "Taller práctico sobre procesamiento y análisis de datos satelitales para aplicaciones ambientales y de recursos hídricos.",
          location: "Ubicación:",
          venue: "Laboratorio de Geomática, Tec de Monterrey Campus Hermosillo"
        },
        session2: {
          title: "Gestión Sustentable de Acuíferos Transfronterizos",
          speaker: "Dr. Michael Johnson",
          description: "Estrategias colaborativas para la gestión sustentable de acuíferos compartidos entre México y Estados Unidos.",
          location: "Ubicación:",
          venue: "Auditorio Principal, Tec de Monterrey Campus Hermosillo"
        },
        panel1: {
          title: "Panel: Cooperación Internacional en Recursos Hídricos", 
          speaker: "Panel de Expertos",
          description: "Mesa redonda con especialistas de ambos países sobre marcos de cooperación para la gestión de recursos hídricos transfronterizos.",
          location: "Ubicación:",
          venue: "Sala de Conferencias B, Tec de Monterrey Campus Hermosillo"
        },
        session3: {
          title: "Cambio Climático y Recursos Hídricos",
          speaker: "Dra. Elena Ramírez",
          description: "Impacto del cambio climático en los recursos hídricos de la región fronteriza y estrategias de adaptación basadas en tecnología espacial.",
          location: "Ubicación:",
          venue: "Auditorio Principal, Tec de Monterrey Campus Hermosillo"
        }
      }
    },
    
    // Resources Section
    resources: {
      title: "Recursos y Enlaces",
      description: "Enlaces útiles y recursos sobre tecnología espacial y gestión de recursos hídricos.",
      links: {
        nasa: {
          title: "NASA Earth Science Division",
          description: "Recursos sobre ciencias de la Tierra y tecnología satelital aplicada al monitoreo ambiental.",
          url: "https://science.nasa.gov/earth-science/"
        },
        usgs: {
          title: "USGS Water Resources",
          description: "Información sobre recursos hídricos y datos de monitoreo en tiempo real.",
          url: "https://www.usgs.gov/mission-areas/water-resources"
        },
        conagua: {
          title: "CONAGUA México",
          description: "Comisión Nacional del Agua - Información oficial sobre recursos hídricos en México.",
          url: "https://www.gob.mx/conagua"
        }
      }
    },
    
    // Counter stats
    counters: {
      attendees: "Asistentes",
      seats: "Lugares",
      partners: "Aliados",
      sessions: "Sesiones"
    },
    
    // Sections
    sections: {
      program: {
        title: "Programa del Coloquio",
        description: "Distribución de actividades, talleres y conferencias por fases y sedes binacionales."
      },
      speakers: {
        title: "Nuestros Ponentes",
        description: "Expertos internacionales en ciencia espacial y sostenibilidad ambiental que compartirán su conocimiento durante el III Coloquio Internacional."
      },
      events: {
        title: "Próximas Actividades",
        description: "Conoce las actividades programadas para las diferentes sedes del III Coloquio Internacional de Espacio y Sostenibilidad 2025."
      },
      registration: {
        title: "Registro",
        description: "Información sobre inscripciones y registro al evento."
      },
      news: {
        title: "Últimas Noticias",
        description: "Manténgase informado sobre las últimas novedades del evento."
      },
      sponsors: {
        title: "Aliados",
        description: "Instituciones y organizaciones que apoyan el III Coloquio Internacional."
      },
      contact: {
        title: "Contacto",
        description: "Información de contacto y ubicación del evento."
      }
    },
    
    // Call to Action Section
    callToAction: {
      title: "Únete al Coloquio Internacional",
      subtitle: "Inscríbete para recibir actualizaciones sobre el evento",
      benefitsTitle: "Beneficios de participar:",
      benefit1: "- Acceso a talleres prácticos con expertos NASA",
      benefit2: "- Materiales exclusivos sobre teledetección",
      benefit3: "- Certificado de asistencia",
      benefit4: "- Networking con instituciones binacionales",
      benefit5: "- Participación en proyectos de ciencia ciudadana",
      benefit6: "- Recursos sobre gestión de recursos hídricos",
      benefit7: "- Acceso a datos de observación terrestre",
      registerBtn: "Registrarse Ahora"
    },
    
    // Events Section
    events: {
      phase1: {
        title: "Conferencia Fase I",
        details: "Ver detalles"
      },
      phase2: {
        title: "Conferencia Fase II", 
        details: "Ver detalles"
      },
      workshops: {
        title: "Mesas de Trabajo",
        details: "Ver detalles"
      },
      presentation: {
        title: "Presentación Final",
        details: "Ver detalles"
      },
      moreBtn: "Más Eventos"
    },
    
    // Speakers/Team section
    speakers: {
      meetAll: "Conocer Todos los Ponentes",
      roles: {
        researcher: "Investigador Espacial",
        coordinator: "Coordinador de Programas", 
        analyst: "Analista de Datos Satelitales",
        director: "Director de Proyectos",
        specialist: "Especialista en Recursos Hídricos",
        engineer: "Ingeniero en Geomática"
      },
      people: {
        researcher1: {
          name: "Dr. Carlos Mendoza",
          role: "Investigador Espacial, NASA"
        },
        researcher2: {
          name: "Dra. Ana Rodríguez", 
          role: "Coordinadora de Programas, CONAGUA"
        },
        analyst1: {
          name: "Ing. Ricardo Vásquez",
          role: "Analista de Datos Satelitales, INEGI"
        },
        director1: {
          name: "Dr. Miguel Herrera",
          role: "Director de Proyectos, TecNM"
        },
        specialist1: {
          name: "Dra. Laura Sánchez",
          role: "Especialista en Recursos Hídricos, USGS"
        },
        engineer1: {
          name: "Ing. José Ramírez",
          role: "Ingeniero en Geomática, UNAM"
        },
        engineer2: {
          name: "M.C. Patricia González",
          role: "Especialista en Teledetección, COLPOS"
        },
        specialist2: {
          name: "Dr. Patrick González",
          role: "Especialista en Teledetección, NASA"
        },
        researcher3: {
          name: "Dr. Fernando López",
          role: "Investigador Senior, CICY"
        }
      }
    },
    
    // Pricing/Registration Section
    pricing: {
      title: "Registro",
      description: "El III Coloquio Internacional de Espacio y Sostenibilidad ofrece diferentes modalidades de participación adaptadas a las necesidades de los asistentes.",
      basic: {
        title: "Acceso Básico",
        price: "$600",
        currency: "MXN por Día",
        features: {
          generalEntry: "Entrada General",
          coffeeBreak: "Pausa Café"
        },
        registerBtn: "Registrarse"
      },
      standard: {
        title: "Acceso Estándar",
        price: "$900",
        currency: "MXN por Día",
        features: {
          generalEntry: "Entrada General",
          coffeeBreak: "Pausa Café",
          dailyMeal: "Comida diaria",
          certificate: "Certificado"
        },
        registerBtn: "Registrarse"
      },
      premium: {
        title: "Acceso Investigadores",
        price: "$1500",
        currency: "MXN por Día",
        features: {
          vipEntry: "Entrada VIP",
          coffeeBreak: "Pausa Café",
          gourmetMeals: "Comidas gourmet",
          allAreasAccess: "Acceso a todas las áreas",
          certificate: "Certificado"
        },
        registerBtn: "Registrarse"
      }
    },
    
    // Blog/News Section
    blog: {
      title: "Últimas Noticias",
      description: "Mantente al día con las novedades, anuncios y avances sobre el III Coloquio Internacional de Espacio y Sostenibilidad.",
      viewAllBtn: "Ver Todas las Noticias"
    },
    
    // Video Section
    video: {
      fallbackText: "Tu navegador no soporta el elemento de video."
    },
    
    // Footer
    footer: {
      subscribe: {
        title: "Recibe Actualizaciones",
        placeholder: "Ingresa Tu Correo Electrónico",
        button: "Suscribirse"
      },
      copyright: "III Coloquio Internacional de Espacio y Sostenibilidad 2025"
    },
    
    // Sections descriptions
    sections: {
      sponsors: {
        description: "Organizaciones e instituciones que hacen posible el III Coloquio Internacional de Espacio y Sostenibilidad 2025."
      },
      contact: {
        description: "Para más información sobre el III Coloquio Internacional de Espacio y Sostenibilidad puede contactarnos a través de los siguientes medios."
      }
    },
    
    // Contact form
    contact: {
      form: {
        name: "Nombre",
        email: "Correo Electrónico", 
        subject: "Asunto",
        message: "Mensaje",
        submit: "Enviar Mensaje",
        nameError: "Por favor ingresa tu nombre",
        emailError: "Por favor ingresa tu correo electrónico",
        subjectError: "Por favor ingresa el asunto de tu mensaje",
        messageError: "Por favor escribe tu mensaje"
      }
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About", 
      program: "Program",
      speakers: "Speakers",
      gallery: "Gallery",
      registration: "Registration",
      sponsors: "Partners",
      contact: "Contact"
    },
    
    // Hero Section
    hero: {
      date: "November 2025 - Hermosillo, Sonora and Tucson, Arizona",
      title: "III International Space and Sustainability Symposium",
      description: "Applications of space science and technology for monitoring and managing water resources in the Mexico-United States border region.",
      registerBtn: "Register"
    },
    
    // About Section
    about: {
      title: "About the Symposium",
      description: "The III International Space and Sustainability Symposium is a binational event that brings together experts, academics and professionals from the space and environmental sectors to address the challenges of sustainable management of water resources in the border area between Mexico and the United States, using space technologies as key tools for monitoring and decision making.",
      benefits: {
        networking: "Networking Sessions",
        contacts: "New Professional Contacts",
        speakers: "Inspiration from Featured Speakers",
        binational: "Binational Events (Mexico-USA)",
        sustainability: "Focus on Sustainability and Space Technology"
      },
      moreInfoBtn: "More Information"
    },
    
    // Information Bar
    info: {
      location: {
        title: "Location",
        text: "Hermosillo, Sonora and Tucson, Arizona"
      },
      date: {
        title: "Date & Time",
        text: "9am - 6pm, November 2025"
      },
      speakers: {
        title: "Speakers",
        text: "25 Professionals"
      },
      capacity: {
        title: "Capacity",
        text: "150 People"
      }
    },
    
    // Intro Section
    intro: {
      title: "Why Participate?",
      description: "The III International Space and Sustainability Symposium offers a unique opportunity <br> to connect with experts and address cross-border environmental challenges.",
      features: {
        speakers: {
          title: "Featured Speakers",
          description: "International experts in space technology and water resource management will share their knowledge."
        },
        networking: {
          title: "Professional Networking",
          description: "Connect with space and environmental sector professionals from Mexico and the United States."
        },
        innovation: {
          title: "Technological Innovation",
          description: "Learn about the latest satellite technology applications for sustainability."
        },
        inspiration: {
          title: "Get Inspired",
          description: "Discover innovative applications of satellite data for sustainable water management."
        },
        networking2: {
          title: "Networking Sessions",
          description: "Opportunities to connect with academics, companies and organizations in the space and environmental sector."
        },
        visits: {
          title: "Technical Visits",
          description: "Tours of key facilities for water management in the Sonora-Arizona border region."
        }
      }
    },
    
    // Program Session Types
    sessionTypes: {
      conference: "Conference",
      workshop: "Workshop",
      panel: "Panel"
    },
    
    // Program Tabs
    programTabs: {
      phase1: {
        title: "Phase I: Sonora",
        date: "November 12, 2025"
      },
      phase2: {
        title: "Phase II: Arizona", 
        date: "November 14, 2025"
      },
      phase3: {
        title: "Save the Date",
        date: "2025-2026"
      },
      resources: {
        title: "Resources and Links",
        subtitle: "NASA Water Resources"
      }
    },

    // Program Section
    program: {
      title: "Symposium Program",
      description: "Detailed agenda for the III International Space and Sustainability Symposium.",
      events: {
        opening: {
          title: "Opening Ceremony",
          speaker: "Dr. María González",
          description: "Official welcome to the III International Space and Sustainability Symposium with participation from authorities from Mexico and the United States.",
          location: "Location:",
          venue: "Main Auditorium, Tec de Monterrey Campus Hermosillo"
        },
        session1: {
          title: "Satellite Technologies for Water Monitoring",
          speaker: "Dr. Roberto Sánchez",
          description: "Analysis of satellite technologies applied to water resource monitoring in the Mexico-United States border region.",
          location: "Location:",
          venue: "Conference Room A, Tec de Monterrey Campus Hermosillo"
        },
        workshop1: {
          title: "Workshop: Satellite Data Processing",
          speaker: "Eng. Patricia López",
          description: "Practical workshop on satellite data processing and analysis for environmental and water resource applications.",
          location: "Location:",
          venue: "Geomatics Laboratory, Tec de Monterrey Campus Hermosillo"
        },
        session2: {
          title: "Sustainable Management of Transboundary Aquifers",
          speaker: "Dr. Michael Johnson",
          description: "Collaborative strategies for sustainable management of shared aquifers between Mexico and the United States.",
          location: "Location:",
          venue: "Main Auditorium, Tec de Monterrey Campus Hermosillo"
        },
        panel1: {
          title: "Panel: International Cooperation in Water Resources",
          speaker: "Expert Panel",
          description: "Round table with specialists from both countries on cooperation frameworks for transboundary water resource management.",
          location: "Location:",
          venue: "Conference Room B, Tec de Monterrey Campus Hermosillo"
        },
        session3: {
          title: "Climate Change and Water Resources",
          speaker: "Dr. Elena Ramírez",
          description: "Impact of climate change on water resources in the border region and adaptation strategies based on space technology.",
          location: "Location:",
          venue: "Main Auditorium, Tec de Monterrey Campus Hermosillo"
        }
      }
    },
    
    // Resources Section
    resources: {
      title: "Resources and Links",
      description: "Useful links and resources about space technology and water resource management.",
      links: {
        nasa: {
          title: "NASA Earth Science Division",
          description: "Resources on Earth sciences and satellite technology applied to environmental monitoring.",
          url: "https://science.nasa.gov/earth-science/"
        },
        usgs: {
          title: "USGS Water Resources",
          description: "Water resource information and real-time monitoring data.",
          url: "https://www.usgs.gov/mission-areas/water-resources"
        },
        conagua: {
          title: "CONAGUA Mexico",
          description: "National Water Commission - Official information on water resources in Mexico.",
          url: "https://www.gob.mx/conagua"
        }
      }
    },
    
    // Counter stats
    counters: {
      attendees: "Attendees",
      seats: "Seats",
      partners: "Partners",
      sessions: "Sessions"
    },
    
    // Sections
    sections: {
      program: {
        title: "Symposium Program",
        description: "Distribution of activities, workshops and conferences by phases and binational venues."
      },
      speakers: {
        title: "Our Speakers",
        description: "International experts in space science and environmental sustainability who will share their knowledge during the III International Symposium."
      },
      events: {
        title: "Upcoming Activities",
        description: "Learn about the scheduled activities for the different venues of the III International Space and Sustainability Symposium 2025."
      },
      registration: {
        title: "Registration",
        description: "Information about enrollment and event registration."
      },
      news: {
        title: "Latest News",
        description: "Stay informed about the latest event updates."
      },
      sponsors: {
        title: "Partners",
        description: "Institutions and organizations that support the III International Symposium."
      },
      contact: {
        title: "Contact",
        description: "Contact information and event location."
      }
    },
    
    // Call to Action Section
    callToAction: {
      title: "Join the International Symposium",
      subtitle: "Sign up to receive updates about the event",
      benefitsTitle: "Benefits of participating:",
      benefit1: "- Access to hands-on workshops with NASA experts",
      benefit2: "- Exclusive materials on remote sensing",
      benefit3: "- Certificate of attendance",
      benefit4: "- Networking with binational institutions",
      benefit5: "- Participation in citizen science projects",
      benefit6: "- Water resource management resources",
      benefit7: "- Access to Earth observation data",
      registerBtn: "Register Now"
    },
    
    // Events Section
    events: {
      phase1: {
        title: "Phase I Conference",
        details: "View details"
      },
      phase2: {
        title: "Phase II Conference", 
        details: "View details"
      },
      workshops: {
        title: "Working Sessions",
        details: "View details"
      },
      presentation: {
        title: "Final Presentation",
        details: "View details"
      },
      moreBtn: "More Events"
    },
    
    // Speakers/Team section
    speakers: {
      meetAll: "Meet All Speakers",
      roles: {
        researcher: "Space Researcher",
        coordinator: "Program Coordinator", 
        analyst: "Satellite Data Analyst",
        director: "Project Director",
        specialist: "Water Resources Specialist",
        engineer: "Geomatics Engineer"
      },
      people: {
        researcher1: {
          name: "Dr. Carlos Mendoza",
          role: "Space Researcher, NASA"
        },
        researcher2: {
          name: "Dr. Ana Rodríguez", 
          role: "Program Coordinator, CONAGUA"
        },
        analyst1: {
          name: "Eng. Ricardo Vásquez",
          role: "Satellite Data Analyst, INEGI"
        },
        director1: {
          name: "Dr. Miguel Herrera",
          role: "Project Director, TecNM"
        },
        specialist1: {
          name: "Dr. Laura Sánchez",
          role: "Water Resources Specialist, USGS"
        },
        engineer1: {
          name: "Eng. José Ramírez",
          role: "Geomatics Engineer, UNAM"
        },
        engineer2: {
          name: "M.Sc. Patricia González",
          role: "Remote Sensing Specialist, COLPOS"
        },
        specialist2: {
          name: "Dr. Patrick González",
          role: "Remote Sensing Specialist, NASA"
        },
        researcher3: {
          name: "Dr. Fernando López",
          role: "Senior Researcher, CICY"
        }
      }
    },
    
    // Pricing/Registration Section
    pricing: {
      title: "Registration",
      description: "The III International Space and Sustainability Symposium offers different participation modalities adapted to attendee needs.",
      basic: {
        title: "Basic Access",
        price: "$600",
        currency: "MXN per Day",
        features: {
          generalEntry: "General Admission",
          coffeeBreak: "Coffee Break"
        },
        registerBtn: "Register"
      },
      standard: {
        title: "Standard Access",
        price: "$900",
        currency: "MXN per Day",
        features: {
          generalEntry: "General Admission",
          coffeeBreak: "Coffee Break",
          dailyMeal: "Daily Lunch",
          certificate: "Certificate"
        },
        registerBtn: "Register"
      },
      premium: {
        title: "Researchers Access",
        price: "$1500",
        currency: "MXN per Day",
        features: {
          vipEntry: "VIP Entry",
          coffeeBreak: "Coffee Break",
          gourmetMeals: "Gourmet Meals",
          allAreasAccess: "Access to all areas",
          certificate: "Certificate"
        },
        registerBtn: "Register"
      }
    },
    
    // Blog/News Section
    blog: {
      title: "Latest News",
      description: "Stay up to date with news, announcements and advances about the III International Space and Sustainability Symposium.",
      viewAllBtn: "View All News"
    },
    
    // Video Section
    video: {
      fallbackText: "Your browser does not support the video element."
    },
    
    // Footer
    footer: {
      subscribe: {
        title: "Get Updates",
        placeholder: "Enter Your Email Address",
        button: "Subscribe"
      },
      copyright: "III International Space and Sustainability Symposium 2025"
    },
    
    // Sections descriptions
    sections: {
      sponsors: {
        description: "Organizations and institutions that make the III International Space and Sustainability Symposium 2025 possible."
      },
      contact: {
        description: "For more information about the III International Space and Sustainability Symposium you can contact us through the following means."
      }
    },
    
    // Contact form
    contact: {
      form: {
        name: "Name",
        email: "Email Address",
        subject: "Subject", 
        message: "Message",
        submit: "Send Message",
        nameError: "Please enter your name",
        emailError: "Please enter your email address",
        subjectError: "Please enter the subject of your message",
        messageError: "Please write your message"
      }
    }
  }
};
