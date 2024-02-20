// Array de usuarios y contraseñas
var users = [
    { username: "usuario1", password: "contraseña1", saldo: 200 },
    { username: "usuario2", password: "contraseña2", saldo: 290 },
    { username: "usuario3", password: "contraseña3", saldo: 67 }
];

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Buscar usuario en el array
    var foundUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });
    
    if (foundUser) {
        alert('Bienvenido ' + username);
        document.getElementById("message").innerHTML = "Inicio de sesión exitoso";
        // Mostrar los detalles de la cuenta
        document.getElementById("account-username").textContent = foundUser.username;
        document.getElementById("account-saldo").textContent = foundUser.saldo;
        document.getElementById("account-details").style.display = "block";
    } else {
        alert('Usuario o contraseña incorrectos o la cuenta no existe. Por favor, vuelve a intentarlo.');
        document.getElementById("message").innerHTML = "Usuario o contraseña incorrectos";
    }
}

function ingresarMonto() {
    var monto = parseFloat(document.getElementById("monto-ingresar").value);

    if (!isNaN(monto) && monto > 0) {
        var saldoActual = parseFloat(document.getElementById("account-saldo").textContent);
        var nuevoSaldo = saldoActual + monto;

        if (nuevoSaldo <= 990) {
            document.getElementById("account-saldo").textContent = nuevoSaldo.toFixed(2);
            alert("Se ha ingresado correctamente el monto. Nuevo saldo: $" + nuevoSaldo.toFixed(2));
        } else {
            alert("No se puede ingresar el monto. El saldo máximo permitido es $990.");
        }
    } else {
        alert("Por favor, ingrese un monto válido (mayor que 0).");
    }
}

function retirarMonto() {
    var monto = parseFloat(document.getElementById("monto-retirar").value);

    if (!isNaN(monto) && monto > 0) {
        var saldoActual = parseFloat(document.getElementById("account-saldo").textContent);
        var nuevoSaldo = saldoActual - monto;

        if (nuevoSaldo >= 10) {
            document.getElementById("account-saldo").textContent = nuevoSaldo.toFixed(2);
            alert("Se ha retirado correctamente el monto. Nuevo saldo: $" + nuevoSaldo.toFixed(2));
        } else {
            alert("No se puede retirar el monto. El saldo mínimo permitido es $10.");
        }
    } else {
        alert("Por favor, ingrese un monto válido (mayor que 0).");
    }
}
