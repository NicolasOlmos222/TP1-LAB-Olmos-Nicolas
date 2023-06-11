new Vue ({
    el : '#app',
    data: {
        nombre: 'Iniciar Sesion',
        inicio: ["nicolas", "123456789", false],
        usuario: '',
        contrasena: '',
        mostrar: false,
        mostrarAlerta: false,
        mostrarBoton1: true,

        mostrarMG: true,
        contMG: 200,
        comentario : '',
        comentarios: [
        ]
    },
    methods: {
        inicioSesion() {
            this.inicio[0] = this.usuario;
            this.inicio[1] = this.contrasena;
            if(this.usuario == this.inicio[0]){
                if(this.contrasena == this.inicio[1]){
                    this.inicio[2] = true;
                    this.mostrar = !this.mostrar;
                    this.nombre = "Hola " + this.inicio[0];
                }
            }
        },
        mostrarDiv() {
            this.mostrar = !this.mostrar;
        },
        alternarBoton() {
            if (this.inicio[2]){
                this.mostrarBoton1 = !this.mostrarBoton1;
            }else{
                this.mostrarAlerta = true;
                setTimeout(() => {
                    this.mostrarAlerta = false;
                  }, 3000); // 3000 milisegundos = 3 segundos
            }
            },
        meGusta(){
            if (this.inicio[2]){
                if(this.mostrarMG){
                    this.mostrarMG = !this.mostrarMG;
                    this.contMG++;
                }else{
                    this.mostrarMG = !this.mostrarMG;
                    this.contMG--;
                }
            }else{
                this.mostrarAlerta = true;
                setTimeout(() => {
                    this.mostrarAlerta = false;
                  }, 3000); // 3000 milisegundos = 3 segundos
            }
        },
        comentar(){
            if (this.inicio[2]){
                if (this.comentario) {
                    const newItem = {
                      id: Date.now(),
                      text: this.comentario
                    };
                    this.comentarios.push(newItem);
                    this.comentario = '';
                }
            }else{
                this.mostrarAlerta = true;
                setTimeout(() => {
                    this.mostrarAlerta = false;
                  }, 3000); // 3000 milisegundos = 3 segundos
            }  
        },
        eliminarComentario(id) {
            this.comentarios.splice(id, 1);
        }
    }
  });