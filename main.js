
// LA MANERA QUE EL PROFESOR LO HACE

/* const videoPlay = (id) => {
    const urlSecreta = `https://urlsecreta.com/${id};`
    console.log(`esta reproduciendo desde  ${urlSecreta}`); 
}

const videoPausa = (id) => {
    const urlSecreta = `https://urlsecreta.com/${id};`
    console.log(`se pauso la url ${urlSecreta}`); 
}

export class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name= name;
        this.videoID = videoID;
    }

    reproducir () {
        videoPlay(this.videoID)
    }
    pausar () {
        videoPausa(this.videoID)
    }
}
 */


class Student {
    constructor ({
        name, 
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    } 
    
    publicarComentario (comentario) {
        const comment = new Comment ({
            content: comentario,
            studentName: this.name
        })
        comment.publicar()
    }
}

class FreeStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourses(newCourse) {
        if(newCourse.isFree) {
            this.approvedCourses.push(newCourse)
        } else {
            console.log('Lo siento este curso no es gratis');
        }
    }
}

class BasicStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourses(newCourse) {
        if(newCourse.lang !== 'english') {
            this.approvedCourses.push(newCourse)
        } else {
            console.log('Lo siento no puedes tomar cursos en ingles');
        }
    }
}

class ExpertStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourses(newCourse) {
        this.approvedCourses.push(newCourse)
    }
}

class TeacherStudent extends Student {
    constructor(props) {
        super(props);
    }
    approveCourses(newCourse) {
        this.approvedCourses.push(newCourse)
    }
    publicarComentario (comentario) {
        const comment = new Comment ({
            content: comentario,
            studentName: this.name,
            studentRole: 'Teacher'
        })
        comment.publicar()
    }
}

class LearningPath {
    constructor({
        name,
        cursos = [],
    }) {
        this.name = name;
        this.cursos = cursos;
    }
}

class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = 'spanish'
    }) {
        this.name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    get name () {
        return this._name
    }
    set name (nuevoNombre) {
        if (nuevoNombre === 'Curso para pendejos de Programacion') {
            console.warn('No se puede usar lenguaje ofensivo');
        } else {
            return this._name = nuevoNombre
        }
    }
}

class Comment {
    constructor({
        content,
        studentName,
        studentRole = 'estudiante'
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }
    publicar () {
        console.log(`${this.studentName} (${this.studentRole})`)
        console.log(`${this.likes} likes`);
        console.log(this.content);
    }
}

const cursoProgBasica = new Course ({
    name: 'Curso de Programacion Basica con JS',
    isFree: true,
})

const cursoPracticoHTML = new Course({
    name: 'Curso Practico de HTML',
    lang: 'english',
})

const cursoParaCrearVideojuegos = new Course({
    name: 'Curso Basico Para Crear Videojuegos',
    isFree: false
})

const escuelaDeDesarolloWeb = new LearningPath({
    name: 'Escuela de Desarrollo Web',
    cursos: [
        cursoProgBasica,
        cursoPracticoHTML,
        cursoParaCrearVideojuegos,
    ]
})

const EscuelaDeIngles = new LearningPath({
    name: 'Escuela de Ingles',
    cursos: [
        cursoPracticoHTML,
        cursoPracticoHTML,
        cursoPracticoHTML,
    ]
});

const escuelaDeNegocios = new LearningPath({
    name: 'Escuela de Negocios',
    cursos: [
        cursoParaCrearVideojuegos,
        cursoParaCrearVideojuegos,
        cursoParaCrearVideojuegos,
    ]
})

const ariel = new ExpertStudent ({
    name: 'Ariel',
    username: 'SpookyD',
    age: 28,
    email: 'arieldelgrande@hotmail.com',
    instagram: 'arieldelg',
    facebook: 'arieldelgrande',
    learningPaths: [
        escuelaDeDesarolloWeb,
        EscuelaDeIngles,
        escuelaDeNegocios
    ]
})

const beto = new FreeStudent ({
    name: 'Beto',
    email: 'betoshow@gmail.com',
    age: 27,
    username: 'BetoShow',
    instagram: 'betoSH',
    learningPaths: [
        escuelaDeDesarolloWeb
    ]
})

const freddy = new TeacherStudent ({
    name: 'Freddy',
    email: 'Freddy@gmail.com',
    age: 27,
    username: 'Frediberto',
    instagram: 'fredyvega',
})

console.log(ariel);
console.log(ariel.learningPaths.cursos);


