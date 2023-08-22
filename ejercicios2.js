class Student {
    constructor({
        name,
        userName,
        email,
        twitter = undefined,
        facebook = undefined,
        instagram = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.socialMedia = {
            twitter,
            facebook,
            instagram,
        };
        this.approvedCourses = approvedCourses;
        this. learningPaths = learningPaths;
    }

    publicarComentario (comentarios) {
        const comentario = new Comment ({
            studentName: this.name,
            content: comentarios,
        })
        comentario.publicar();
    }
}

class LearningPath {
    constructor({
        name, 
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

class Courses {
    #name
    #isFree
    constructor({
        name, 
        classes = [],
        isFree = false,
        lang = 'spanish',
    }) {
        this.#name = name;
        this.classes = classes;
        this.#isFree = isFree;
        this.lang = lang
    }
    get name () {
        return this.#name
    }
    get isFree () {
        return this.#isFree
    }
}

class FreeStudent extends Student {
    constructor(params) {
        super(params);
    }

    approveCourses (newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn('Solo puedes tomar cursos que son gratis');
        }
    }
}

class BasicStudent extends Student {
    constructor(params) {
        super(params);
    }

    approveCourses (newCourse) {
        if (newCourse.lang !== 'spanish') {
            console.warn('Solo puedes tomar cursos que no son en ingles');
        } else {
            this.approvedCourses.push(newCourse)
        }
    }
}

class ExpertStudent extends Student {
    constructor(params) {
        super(params);
    }

    approveCourses (newCourse) {
        this.approvedCourses.push(newCourse)
    }
}

class TeacherStudent extends Student {
    constructor(params) {
        super(params);
    }

    approveCourses (newCourse) {
        this.approvedCourses.push(newCourse)
    }

    publicarComentario (comentarios) {
        const comentario = new Comment ({
            studentName: this.name,
            content: comentarios,
            studentRole: 'Teacher'
        })
        comentario.publicar();
    }
}

class Comment {
    constructor({
        studentName,
        studentRole = 'estudiante',
        content,
    }) {
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.content = content;
        this.likes = 0;
    }

    publicar () {
        console.log(`${this.studentName} (${this.studentRole})`);
        console.log(`${this.likes} likes`);
        console.log(this.content);
    }
}

const FundamentosPD = new Courses ({
    name: 'Fundamentos de Programacion y Desarollo',
    classes: ['Curso Basico de Computadoras e informatica', 'Curso de Pensamiento Logico: Algoritmos y Diagrama de Flujo', 'Curso de Pensamiento Logico: Manejo de Datos, Estructuras y Funciones'],
    isFree: true
})

const crearPrimerPW = new Courses ({
    name: 'Como crear tus primeros Proyectos Web',
    classes: ['Curso de Creacion de Paginas Web con ChatGPT', 'Curso de Creacion de Paginas Web con WordPress y No-Code', 'CUrso de Fundamentos de Sass: Crea tu Primera Landing Page'],
    lang: 'english'
})

const inteligenciaArtificial = new Courses ({
    name: 'Inteligencia Artificial para Developers',
    classes: ['Curso de inteligencia artificial: ChatGPT, DALL-E y Hugging Face', 'Curso de prompt Engineering con ChatGPT', 'Curso de herramientas de inteligencia artificial para Developers'],
})

const fundamentosDeDIA = new Courses ({
    name: 'Fundamentos de Data e Inteligencia Artificial',
    classes: ['Curso de inteligencia artificial: ChatGPT, DALL-E y Hugging Face', 'Curso de prompt Engineering con ChatGPT', 'Como y porque aprender data science e inteligencia artificial'],
    isFree: true
})

const pensamientoLogico = new Courses ({
    name: 'Pensamiento Logico',
    classes: ['Curso de Pensamiento Logico: Algoritmos y Diagrama de Flujo', 'Curso de Pensamiento Logico: Manejo de Datos, Estructuras y Funciones', 'Curso de Pensamiento Logico: Lenguajes de Programacion'],
    isFree: true
})

const administradorDeServers = new Courses ({
    name: 'Administracion de Servidores', 
    classes: ['Curso de Introduccion a la Terminal y Linea de Comandos', 'Curso Professional de Git y GitHub', 'Fundamentos de Ingenieria de Software'],
    
})

const DevOpsClass = new Courses ({
    name: 'DevOps',
    classes: ['Curso de Introduccion a DevOps', 'Curso de Introduccion al Despliegue de Aplicaciones', 'AudioCurso de Fundamentos de Arquitectura de Alta Concurrencia'],
    lang: 'english'
    
})

const EscuelaDeDW = new LearningPath ({
    name: 'Escuela de Desarollo Web',
    courses: [FundamentosPD, crearPrimerPW, inteligenciaArtificial],
})

const DataSIA = new LearningPath ({
    name: 'Escuela de Data Science e Inteligencia Artificial',
    courses: [fundamentosDeDIA, pensamientoLogico],
})

const DevOps = new LearningPath ({
    name: 'Escuela de DevOps y Cloud Coud Computing',
    courses: [administradorDeServers, DevOpsClass],
})

const ariel = new ExpertStudent ({
    name: 'Ariel',
    email: 'arieldelgrande@hotmail.com',
    userName: 'SpookyD',
    facebook: 'arieldelgrande',
    instagram: 'arieldelg',
    twitter: 'adg',
    learningPaths: [
        EscuelaDeDW,
        DataSIA
    ]
})

const beto = new FreeStudent ({
    name: 'Beto',
    email: 'betoshow@hotmail.com',
    userName: 'Betoshow',
    facebook: 'betoPoblete',
    instagram: 'AlbertoPoblete',
    twitter: 'BSH',
    learningPaths: [
        DevOps,
        DataSIA
    ]
})

const alejandro = new BasicStudent ({
    name: 'Alejandro',
    email: 'alejandro@hotmail.com',
    userName: 'unTalIvan',
    facebook: 'alejandroSalinas',
    instagram: 'alesal',
    twitter: 'ALS',
    learningPaths: [
        DevOps,
        DataSIA
    ]
})

const juan = new TeacherStudent ({
    name: 'Juan',
    email: 'juan@hotmail.com',
    userName: 'JuanFeliz',
    facebook: 'juanitofeliz',
    instagram: 'juanF',
    twitter: 'JF',
    learningPaths: [
        DevOps,
        DataSIA
    ]
})

console.log(ariel)

console.log(FundamentosPD.name)


