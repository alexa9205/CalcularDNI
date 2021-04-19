window.addEventListener('load', detectarEnvio, false);

        function detectarEnvio() {
            dni.addEventListener('submit', recibirDatos, false);
        }
        var letras = new Array('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E');

        function recibirDatos(e) {
            e.preventDefault();
            resultado.innerHTML = '';
            resultadoh1.innerHTML = '';
            let numeroDNI = dni.numero.value;
            let letraDNI = dni.letra.value.toUpperCase();
            var letraBuena = verificarLetraDNI2(numeroDNI);
            if (comprobarNumeroDNI(numeroDNI) && comprobarLetraDNI(letraDNI)) {
                let h3 = document.createElement('h3');

                resultadoh1.innerHTML = ' La letra correspondiente a este numero de DNI es : ' + letraBuena + ' ! ';
                if (verificarLetraDNI(numeroDNI, letraDNI)) {
                    h3.innerText = 'El DNI ' + numeroDNI + ' ' + letraDNI + '  es correcto !  ';
                    h3.style.color = 'green';
                } else {
                    h3.innerText = 'El DNI ' + numeroDNI + ' ' + letraDNI + '  es incorrecto ! ';
                    h3.style.color = 'red';
                }
                resultado.appendChild(h3);
            } else {
                dni.numero.value = dni.letra.value = '';
            }
        }

        function comprobarNumeroDNI(numeroDNI) {
            if (isNaN(numeroDNI)) {
                alert('El número de DNI sólo debe contener números');
                return false;
            } else if (numeroDNI.length != 8) {
                alert('El número de DNI debe contener 8 dígitos');
                return false;
            } else {
                return true;
            }
        }

        function comprobarLetraDNI(letraDNI) {
            if (letraDNI.length == 0 || /^([a-zA-Z]{1})$/.test(letraDNI) == false) {
                alert('Letra de DNI vacía.');
                return false;
            } else if (!isNaN(letraDNI)) {
                alert('La letra DNI debe ser una letra');
                return false;
            } else {
                return true;
            }
        }

        function verificarLetraDNI(numeroDNI, letraDNI) {
            return letras[parseInt(numeroDNI) % 23] != letraDNI ? false : true;
        }

        function verificarLetraDNI2(numeroDNI) {
            return letras[parseInt(numeroDNI) % 23]
        }