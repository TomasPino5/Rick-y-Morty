export const validation = (userData) => {
    const errors = {};
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!userData.email) {
      errors.email = 'El email es obligatorio.';
    } else if (!emailRegex.test(userData.email)) {
      errors.email = 'El email ingresado no es válido.';
    } else if (userData.email.length > 35) {
      errors.email = 'El email no puede tener más de 35 caracteres.';
    }
  
const passwordRegex = /^(?=.*[0-9]).{6,10}$/;
    if (!userData.password) {
      errors.password = 'La contraseña es obligatoria.';
    } else if (!passwordRegex.test(userData.password)) {
      errors.password = 'La contraseña debe tener al menos un número y una longitud entre 6 y 10 caracteres.';
    }
  
    return errors;
  };